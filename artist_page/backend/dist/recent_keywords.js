"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentKeywordSchema = void 0;
const mongoose = require("mongoose");
require('dotenv').config();
//@ts-ignore
const uri = process.env.MONGOOSE_URL_RECENT_KEYWORDS;
//@ts-ignore
let x = mongoose.createConnection(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected to MongoDB");
    }
});
exports.RecentKeywordSchema = new mongoose.Schema({
    keyword: { type: String, required: false },
});
const Recent_Keywords = x.model('Recent_keywords', exports.RecentKeywordSchema);
exports.default = Recent_Keywords;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50X2tleXdvcmRzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicmVjZW50X2tleXdvcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFM0IsWUFBWTtBQUNaLE1BQU0sR0FBRyxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7QUFFN0QsWUFBWTtBQUNaLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtJQUNoRCxJQUFJLEdBQUcsRUFBRTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQzNCO1NBQU07UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7S0FDdkM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsbUJBQW1CLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ25ELE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtDQUM3QyxDQUFDLENBQUM7QUFFSCxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLDJCQUFtQixDQUFDLENBQUM7QUFDeEUsa0JBQWUsZUFBZSxDQUFDIn0=