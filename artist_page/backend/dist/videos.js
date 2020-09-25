"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoSchema = void 0;
const mongoose = require("mongoose");
require('dotenv').config();
//@ts-ignore
const uri = process.env.MONGOOSE_URL_VIDEOS;
//@ts-ignore
let x = mongoose.createConnection(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected to MongoDB");
    }
});
exports.VideoSchema = new mongoose.Schema({
    video_owner: { type: String, required: false },
    video_main_url: { type: String, required: false },
    video_short_url: { type: String, required: false },
    video_embed_url: { type: String, required: false },
    video_title: { type: String, required: false },
    video_description: { type: String, required: false },
    video_tags: [{ type: String, required: false }],
    video_small_thumbnail: { type: String, required: false },
    video_medium_thumbnail: { type: String, required: false },
    video_large_thumbnail: { type: String, required: false },
    video_publish_date: { type: String, required: false },
    video_hours: { type: Number, required: false },
    video_minutes: { type: Number, required: false },
    video_seconds: { type: Number, required: false },
});
const Videos = x.model('Youtube_videos', exports.VideoSchema);
exports.default = Videos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW9zLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsidmlkZW9zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFM0IsWUFBWTtBQUNaLE1BQU0sR0FBRyxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7QUFFcEQsWUFBWTtBQUNaLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtJQUNoRCxJQUFJLEdBQUcsRUFBRTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQzNCO1NBQU07UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7S0FDdkM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsV0FBVyxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUMzQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7SUFDL0MsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0lBQ2xELGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtJQUNuRCxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7SUFDbkQsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0lBQy9DLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0lBQ3JELFVBQVUsRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDakQscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7SUFDekQsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7SUFDMUQscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7SUFDekQsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7SUFDckQsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0lBQy9DLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtJQUNqRCxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Q0FDcEQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBVyxDQUFDLENBQUM7QUFDdEQsa0JBQWUsTUFBTSxDQUFDIn0=