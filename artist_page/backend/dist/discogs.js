"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscogsSchema = void 0;
const mongoose = require("mongoose");
require('dotenv').config();
//@ts-ignore
const uri = process.env.MONGOOSE_URL_DISCOGS_ALBUMS;
//@ts-ignore
let x = mongoose.createConnection(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected to MongoDB");
    }
});
exports.DiscogsSchema = new mongoose.Schema({
    link: { type: String, required: false },
    api_link: { type: String, required: false },
    cover_art: { type: String, required: false },
    release_year: { type: String, required: false },
    artist_name: { type: String, required: false },
    genres: { type: Array, required: false },
    styles: { type: Array, required: false },
    title: { type: String, required: false },
    date_added: { type: String, required: false },
    number_for_sale: { type: String, required: false },
    lowest_price: { type: String, required: false },
});
const Discogs = x.model('New_record_purchasables', exports.DiscogsSchema);
exports.default = Discogs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY29ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImRpc2NvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBQ3JDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUUzQixZQUFZO0FBQ1osTUFBTSxHQUFHLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQztBQUU1RCxZQUFZO0FBQ1osSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO0lBQ2hELElBQUksR0FBRyxFQUFFO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDM0I7U0FBTTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztLQUN2QztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxhQUFhLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzdDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztJQUN0QyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7SUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO0lBQzVDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztJQUMvQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7SUFDOUMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO0lBQ3hDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztJQUN4QyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7SUFDeEMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO0lBQzdDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztJQUNsRCxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7Q0FDbEQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxxQkFBYSxDQUFDLENBQUM7QUFDbEUsa0JBQWUsT0FBTyxDQUFDIn0=