"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const artistController = require("./controllers/artistController");
const recentController = require("./controllers/recentController");
const keywordController = require("./controllers/keywordController");
const videoController = require("./controllers/videoController");
const channelController = require("./controllers/channelController");
const recentKeywordController = require("./controllers/recentKeywordController");
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
//In use for latest feature
router.get('/recents', recentController.allRecents);
router.get('/recent_keywords', recentKeywordController.allKeywords);
//In use for playlist feature
router.get('/youtube_keywords', keywordController.allKeywords);
router.get('/youtube_keywords/:keyword', keywordController.keywordByKeyword);
router.get('/youtube_videos/:keyword', videoController.videoByKeyword);
router.get('/channel_informations/:video_owner', channelController.channelByVideo);
//In use for livestream feature
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQyxtRUFBbUU7QUFDbkUsbUVBQW1FO0FBQ25FLHFFQUFxRTtBQUNyRSxpRUFBaUU7QUFDakUscUVBQXFFO0FBQ3JFLGlGQUFpRjtBQUVqRixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFM0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdEIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxnREFBZ0QsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM3RixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLDZDQUE2QyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNGLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsOENBQThDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFbkYsTUFBTSxXQUFXLEdBQUc7SUFDbkIsR0FBRyxFQUFFLFVBQVU7SUFDZixJQUFJLEVBQUUsV0FBVztJQUNqQixFQUFFLEVBQUUsRUFBRTtDQUNOLENBQUM7QUFFRixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUV0QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVyQixxQ0FBcUM7QUFDckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUV6RCwyQkFBMkI7QUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUduRSw2QkFBNkI7QUFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvRCxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDN0UsTUFBTSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdkUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUVuRiwrQkFBK0I7QUFDL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1RCxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BELE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRTNELFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUU7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0UsQ0FBQyxDQUFDLENBQUE7QUFFRixpQ0FBaUM7QUFDakMsdUhBQXVIIn0=