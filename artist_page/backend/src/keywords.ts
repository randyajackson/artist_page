import * as mongoose from 'mongoose';
require('dotenv').config();

const uri: string = process.env.MONGOOSE_URL_KEYWORDS;

let x = mongoose.createConnection(uri, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Connected to MongoDB");
    }
});

export const RecentSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    keyword: { type: String, required: false },
    count: { type: Number, required: false }
});

const Keywords = x.model('youtubeKeyword', RecentSchema);
export default Keywords;