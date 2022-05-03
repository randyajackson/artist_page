import * as express from "express";
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
require('dotenv').config();
import * as artistController from "./controllers/artistController";
import * as recentController from "./controllers/recentController";
import * as keywordController from "./controllers/keywordController";
import * as videoController from "./controllers/videoController";
import * as channelController from "./controllers/channelController";
import * as recentKeywordController from "./controllers/recentKeywordController";
import * as radioInfoController from "./controllers/radioInfoController";
import * as discogsController from "./controllers/discogsController";

const fs = require('fs');
const http = require('http');
const https = require('https');
var cors = require('cors');
var socket = require('socket.io');

const app = express();

//@ts-ignore
const uri: string = process.env.MONGOOSE_URL_DISCOGS_ALBUMS;
const privateKey = fs.readFileSync('/etc/letsencrypt/live/intrinse.net/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/intrinse.net/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/intrinse.net/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.set("port", 5566);

let router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router.use(cors());
app.use('/', router);

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

//In use for latest feature
router.get('/recents', recentController.allRecents);
router.get('/recent_keywords', recentKeywordController.allKeywords);

//In use for radio feature
router.get('/radio_infos', radioInfoController.allRadioInfo);

//In use for playlist feature
router.get('/youtube_keywords', keywordController.allKeywords);
router.get('/youtube_keywords/:keyword', keywordController.keywordByKeyword);
router.get('/youtube_keywords/exact/:keyword', keywordController.keywordExact);
router.get('/youtube_videos/:keyword', videoController.videoByKeyword);
router.get('/channel_informations/', channelController.channels);
router.get('/channel_informations/:video_owner', channelController.channelByVideo);

//In use for livestream feature
router.get('/artists', artistController.allArtist);
router.get('/artists/:name', artistController.artistByName);
router.get('/artists/byID/:id', artistController.getArtist);
router.put('/artists/', artistController.addArtist);
router.delete('/artists/:id', artistController.deleteArtist);
router.post('/artists/:id', artistController.updateArtist);

//In use for discogs feature
router.get('/discogs', discogsController.firstAllDiscogs);
router.get('/discogs/:date', discogsController.nextAllDiscogs);
router.get('/discogs_genre_list', discogsController.getAllGenres);
router.get('/discogsgenres/', discogsController.albumsByGenre);
router.get('/discogs/max_price/:max_price', discogsController.albumsByPrice);

httpsServer.listen(app.get('port'), () => {
    console.log(`Mongo Server Running @ http://localhost:${app.get("port")} `);
});

//@ts-ignore
const io = socket(httpsServer, {
	cors: {
		origin: '*'
	}
});

//@ts-ignore
io.on("connect", (socket) => {

	socket.on("ping", (cb: any) => {
        cb();
    });

    socket.on("disconnect", () => {
    });

});

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Connected to MongoDB");
    }
});

const connection = mongoose.connection;

connection.once("open", () => {
	const purchasableChangeStream = connection.collection("new_record_purchasables").watch();
  
	purchasableChangeStream.on("change", (change) => {
	  switch (change.operationType) {
		case "insert":
		  const album = [{
			link: change.fullDocument.link,
			api_link:  change.fullDocument.api_link,
			cover_art:  change.fullDocument.cover_art,
			release_year:  change.fullDocument.release_year,
			genres:  change.fullDocument.genres,
			title:  change.fullDocument.title,
			date_added:  change.fullDocument.date_added,
			number_for_sale:  change.fullDocument.number_for_sale,
			lowest_price:  change.fullDocument.lowest_price,
			created_at: change.fullDocument.created_at,
		  }];
  
		  io.of("/").emit("newAlbum", album);
		  break;
	  }
	});
  });

//if address already in use error
//https://stackoverflow.com/questions/54468097/how-to-fix-error-listen-eaddrinuse-address-already-in-use-5000-unhandled