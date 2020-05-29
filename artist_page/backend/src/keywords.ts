import * as mongoose from 'mongoose';
require('dotenv').config();

//@ts-ignore
const uri: string = process.env.MONGOOSE_URL_KEYWORDS;

//@ts-ignore
let x = mongoose.createConnection(uri, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Connected to MongoDB");
    }
});

export const KeywordSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    keyword: { type: String, required: false },
    count: { type: Number, required: false },
    r: { type: Number, required: false },
    g: { type: Number, required: false },
    b: { type: Number, required: false } 
});

const Keywords = x.model('Youtube_keywords', KeywordSchema);
export default Keywords;