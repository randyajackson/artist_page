import * as express from "express";
import * as bodyParser from 'body-parser';
import * as artistController from "./controllers/artistController";
import * as recentController from "./controllers/recentController";



const fs = require('fs');
const http = require('http');
const https = require('https');
var cors = require('cors');

const app = express();

const privateKey = fs.readFileSync('/etc/letsencrypt/live/intrinsicradio.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/intrinsicradio.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/intrinsicradio.com/chain.pem', 'utf8');

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

router.get('/recents', recentController.allRecents);
router.get('/artists', artistController.allArtist);
router.get('/artists/:name', artistController.artistByName);
router.get('/artists/byID/:id', artistController.getArtist);
router.put('/artists/', artistController.addArtist);
router.delete('/artists/:id', artistController.deleteArtist);
router.post('/artists/:id', artistController.updateArtist);

httpsServer.listen(app.get('port'), () => {
    console.log(`Mongo Server Running @ http://localhost:${app.get("port")} `);
})

//if address already in use error
//https://stackoverflow.com/questions/54468097/how-to-fix-error-listen-eaddrinuse-address-already-in-use-5000-unhandled