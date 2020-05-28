"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentSchema = void 0;
const mongoose = require("mongoose");
require('dotenv').config();
//@ts-ignore
const uri = process.env.MONGOOSE_URL_RECENT;
//@ts-ignore
let x = mongoose.createConnection(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected to MongoDB");
    }
});
exports.RecentSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    name: { type: String, required: false },
    artist_main_url: { type: String, required: false },
    song_url: { type: String, required: false },
    embed: { type: String, required: false }
});
const RecentSongs = x.model('Recent_song', exports.RecentSchema);
exports.default = RecentSongs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50cy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJlY2VudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBQ3JDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUUzQixZQUFZO0FBQ1osTUFBTSxHQUFHLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztBQUVwRCxZQUFZO0FBQ1osSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO0lBQ2hELElBQUksR0FBRyxFQUFFO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDM0I7U0FBTTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztLQUN2QztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzVDLEVBQUUsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztJQUNsQyxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7SUFDcEMsZUFBZSxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO0lBQy9DLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztJQUN4QyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7Q0FDeEMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsb0JBQVksQ0FBQyxDQUFDO0FBQ3pELGtCQUFlLFdBQVcsQ0FBQyJ9