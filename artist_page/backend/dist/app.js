"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const artistController = require("./controllers/artistController");
const recentController = require("./controllers/recentController");
const keywordController = require("./controllers/keywordController");
const fs = require('fs');
const http = require('http');
const https = require('https');
var cors = require('cors');
const app = express();
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
router.get('/recents', recentController.allRecents);
router.get('/youtube_keywords', keywordController.allKeywords);
router.get('/youtube_keywords/:keyword', keywordController.keywordByKeyword);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQyxtRUFBbUU7QUFDbkUsbUVBQW1FO0FBQ25FLHFFQUFxRTtBQUdyRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFM0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdEIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxnREFBZ0QsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM3RixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLDZDQUE2QyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNGLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsOENBQThDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFbkYsTUFBTSxXQUFXLEdBQUc7SUFDbkIsR0FBRyxFQUFFLFVBQVU7SUFDZixJQUFJLEVBQUUsV0FBVztJQUNqQixFQUFFLEVBQUUsRUFBRTtDQUNOLENBQUM7QUFFRixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUV0QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVyQixxQ0FBcUM7QUFDckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUV6RCxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVwRCxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQy9ELE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUU3RSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuRCxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFM0QsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRTtJQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvRSxDQUFDLENBQUMsQ0FBQTtBQUVGLGlDQUFpQztBQUNqQyx1SEFBdUgifQ==