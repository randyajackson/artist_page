import * as express from "express";
import * as bodyParser from 'body-parser';
import * as artistController from "./controllers/artistController";

const app = express();
app.set("port", 5566);

let router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);

router.get('/artists', artistController.allArtist);
router.get('/artists/:id', artistController.getArtist);
router.put('/artists/', artistController.addArtist);
router.delete('/artists/:id', artistController.deleteArtist);
router.post('/artists/:id', artistController.updateArtist);

app.listen(app.get("port"), () => {
    console.log(`Mongo Server Running @ http://localhost:${app.get("port")} `);
})

//if address already in use error
//https://stackoverflow.com/questions/54468097/how-to-fix-error-listen-eaddrinuse-address-already-in-use-5000-unhandled