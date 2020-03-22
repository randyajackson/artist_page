"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var artistController = require("./controllers/artistController");
var fs = require('fs');
var http = require('http');
var https = require('https');
var cors = require('cors');
var app = express();
var privateKey = fs.readFileSync('/etc/letsencrypt/live/intrinsicradio.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/intrinsicradio.com/cert.pem', 'utf8');
var ca = fs.readFileSync('/etc/letsencrypt/live/intrinsicradio.com/chain.pem', 'utf8');
var credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};
app.set("port", 5566);
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);
app.use(cors());
// Starting both http & https servers
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
router.get('/artists', artistController.allArtist);
router.get('/artists/:id', artistController.getArtist);
router.put('/artists/', artistController.addArtist);
router["delete"]('/artists/:id', artistController.deleteArtist);
router.post('/artists/:id', artistController.updateArtist);
httpsServer.listen(app.get('port'), function () {
    console.log("Mongo Server Running @ http://localhost:" + app.get("port") + " ");
});
//if address already in use error
//https://stackoverflow.com/questions/54468097/how-to-fix-error-listen-eaddrinuse-address-already-in-use-5000-unhandled
