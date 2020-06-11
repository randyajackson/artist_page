import * as mongoose from 'mongoose';
require('dotenv').config();

//@ts-ignore
const uri: string = process.env.MONGOOSE_URL_CHANNELS;

//@ts-ignore
let x = mongoose.createConnection(uri, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Connected to MongoDB");
    }
});

export const ChannelSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    channel_name : { type: String, required: false },
    channel_picture : { type: String, required: false },
    channel_main_url : { type: String, required: false },
    channel_homepage : { type: String, required: false }
});

const Channels = x.model('Channel_informations', ChannelSchema);
export default Channels;