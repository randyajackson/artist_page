import * as mongoose from 'mongoose';
require('dotenv').config();

//@ts-ignore
const uri: string = process.env.MONGOOSE_URL_VIDEOS;

//@ts-ignore
let x = mongoose.createConnection(uri, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Connected to MongoDB");
    }
});

export const VideoSchema = new mongoose.Schema({
    video_owner : { type: String, required: false },
    video_main_url : { type: String, required: false },
    video_short_url : { type: String, required: false },
    video_embed_url : { type: String, required: false },
    video_title : { type: String, required: false },
    video_description : { type: String, required: false },
    video_tags : [{ type: String , required: false }],
    video_small_thumbnail : { type: String, required: false },
    video_medium_thumbnail : { type: String, required: false },
    video_large_thumbnail : { type: String, required: false },
    video_hours : { type: Number, required: false },
    video_minutes : { type: Number, required: false },
    video_seconds : { type: Number, required: false },
});

const Videos = x.model('Youtube_videos', VideoSchema);
export default Videos;