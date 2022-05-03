"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();
const artistController = require("./controllers/artistController");
const recentController = require("./controllers/recentController");
const keywordController = require("./controllers/keywordController");
const videoController = require("./controllers/videoController");
const channelController = require("./controllers/channelController");
const recentKeywordController = require("./controllers/recentKeywordController");
const radioInfoController = require("./controllers/radioInfoController");
const discogsController = require("./controllers/discogsController");
const fs = require('fs');
const http = require('http');
const https = require('https');
var cors = require('cors');
var socket = require('socket.io');
const app = express();
//@ts-ignore
const uri = process.env.MONGOOSE_URL_DISCOGS_ALBUMS;
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
    socket.on("ping", (cb) => {
        cb();
    });
    socket.on("disconnect", () => {
    });
});
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
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
                        api_link: change.fullDocument.api_link,
                        cover_art: change.fullDocument.cover_art,
                        release_year: change.fullDocument.release_year,
                        genres: change.fullDocument.genres,
                        title: change.fullDocument.title,
                        date_added: change.fullDocument.date_added,
                        number_for_sale: change.fullDocument.number_for_sale,
                        lowest_price: change.fullDocument.lowest_price,
                        created_at: change.fullDocument.created_at,
                    }];
                io.of("/").emit("newAlbum", album);
                break;
        }
    });
});
//if address already in use error
//https://stackoverflow.com/questions/54468097/how-to-fix-error-listen-eaddrinuse-address-already-in-use-5000-unhandled
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQyxxQ0FBcUM7QUFDckMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzNCLG1FQUFtRTtBQUNuRSxtRUFBbUU7QUFDbkUscUVBQXFFO0FBQ3JFLGlFQUFpRTtBQUNqRSxxRUFBcUU7QUFDckUsaUZBQWlGO0FBQ2pGLHlFQUF5RTtBQUN6RSxxRUFBcUU7QUFFckUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVsQyxNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUV0QixZQUFZO0FBQ1osTUFBTSxHQUFHLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQztBQUM1RCxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLGdEQUFnRCxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdGLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsNkNBQTZDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0YsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyw4Q0FBOEMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVuRixNQUFNLFdBQVcsR0FBRztJQUNuQixHQUFHLEVBQUUsVUFBVTtJQUNmLElBQUksRUFBRSxXQUFXO0lBQ2pCLEVBQUUsRUFBRSxFQUFF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