"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const artistController = require("./controllers/artistController");
const app = express();
const cors = require('cors');
app.set("port", 5566);
let router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);
router.get('/artists', artistController.allArtist);
router.get('/artists/:name', artistController.artistByName);
router.get('/artists/byID/:id', artistController.getArtist);
router.put('/artists/', artistController.addArtist);
router.delete('/artists/:id', artistController.deleteArtist);
router.post('/artists/:id', artistController.updateArtist);
app.listen(app.get("port"), () => {
    console.log(`Mongo Server Running @ http://localhost:${app.get("port")} `);
});
//if address already in use error
//https://stackoverflow.com/questions/54468097/how-to-fix-error-listen-eaddrinuse-address-already-in-use-5000-unhandled
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQyxtRUFBbUU7QUFFbkUsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdEIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVyQixNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuRCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2RCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwRCxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUUzRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9FLENBQUMsQ0FBQyxDQUFBO0FBRUYsaUNBQWlDO0FBQ2pDLHVIQUF1SCJ9