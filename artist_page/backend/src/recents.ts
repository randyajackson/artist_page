import * as mongoose from 'mongoose';
require('dotenv').config();

//@ts-ignore
const uri: string = process.env.MONGOOSE_URL_RECENT;

//@ts-ignore
let x = mongoose.createConnection(uri, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Connected to MongoDB");
    }
});

export const RecentSchema = new mongoose.Schema({
    id: {type:Number, required: false},
    name: {type:String, required: false},
    artist_main_url: {type:String, required: false},
    song_url: {type:String, required: false},
    embed: {type:String, required: false}
});

const RecentSongs = x.model('Recent_song', RecentSchema);
export default RecentSongs;