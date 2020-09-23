import * as mongoose from 'mongoose';
require('dotenv').config();

//@ts-ignore
const uri: string = process.env.MONGOOSE_URL_RECENT_KEYWORDS;

//@ts-ignore
let x = mongoose.createConnection(uri, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Connected to MongoDB");
    }
});

export const RecentKeywordSchema = new mongoose.Schema({
    keyword: { type: String, required: false },
});

const Recent_Keywords = x.model('Recent_keywords', RecentKeywordSchema);
export default Recent_Keywords;