import * as mongoose from 'mongoose';
require('dotenv').config();

//@ts-ignore
const uri: string = process.env.MONGOOSE_URL_DISCOGS_ALBUMS;

//@ts-ignore
let x = mongoose.createConnection(uri, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Connected to MongoDB");
    }
});

export const DiscogsSchema = new mongoose.Schema({
    link: { type: String, required: false},
    api_link:  { type: String, required: false},
    cover_art:  { type: String, required: false},
    release_year:  { type: String, required: false},
    artist_name:  { type: String, required: false},
    genres:  { type: Array, required: false},
    styles:  { type: Array, required: false},
    title:  { type: String, required: false},
    date_added:  { type: String, required: false},
    number_for_sale:  { type: String, required: false},
    lowest_price:  { type: String, required: false},
});

const Discogs = x.model('New_record_purchasables', DiscogsSchema);
export default Discogs;
