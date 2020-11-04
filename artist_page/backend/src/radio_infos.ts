import * as mongoose from 'mongoose';
require('dotenv').config();

//@ts-ignore
const uri: string = process.env.MONGOOSE_URL_RADIO_INFOS;

//@ts-ignore
let x = mongoose.createConnection(uri, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Connected to MongoDB");
    }
});

export const RadioInfoSchema = new mongoose.Schema({
    artist: { type: String, required: false },
    song: { type: String, required: false },
    coverURL: { type: String, required: false },
});

const Radio_Infos = x.model('Radio_infos', RadioInfoSchema);
export default Radio_Infos;