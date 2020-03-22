"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const artistController = require("./controllers/artistController");
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
router.get('/artists', artistController.allArtist);
router.get('/artists/:name', artistController.artistByName);
router.get('/artists/byID/:id', artistController.getArtist);
router.put('/artists/', artistController.addArtist);
router.delete('/artists/:id', artistController.deleteArtist);
router.post('/artists/:id', artistController.updateArtist);
httpsServer.listen(app.get('port'), () => {
    console.log(`Mongo Server Running @ http://localhost:${app.get("port")} `);
});
//if address already in use error
//https://stackoverflow.com/questions/54468097/how-to-fix-error-listen-eaddrinuse-address-already-in-use-5000-unhandled
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9hcnRpc3RQYWdlL2FydGlzdF9wYWdlL2FydGlzdF9wYWdlL2JhY2tlbmQvc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQyxtRUFBbUU7QUFFbkUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTNCLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXRCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsc0RBQXNELEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkcsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxtREFBbUQsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqRyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLG9EQUFvRCxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRXpGLE1BQU0sV0FBVyxHQUFHO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsSUFBSSxFQUFFLFdBQVc7SUFDakIsRUFBRSxFQUFFLEVBQUU7Q0FDTixDQUFDO0FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdEIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFckIscUNBQXFDO0FBQ3JDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUMsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFHekQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1RCxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BELE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRTNELFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUU7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0UsQ0FBQyxDQUFDLENBQUE7QUFFRixpQ0FBaUM7QUFDakMsdUhBQXVIIn0=