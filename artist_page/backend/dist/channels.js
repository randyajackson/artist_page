"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelSchema = void 0;
const mongoose = require("mongoose");
require('dotenv').config();
//@ts-ignore
const uri = process.env.MONGOOSE_URL_CHANNELS;
//@ts-ignore
let x = mongoose.createConnection(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected to MongoDB");
    }
});
exports.ChannelSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    channel_name: { type: String, required: false },
    channel_picture: { type: String, required: false },
    channel_main_url: { type: String, required: false },
    channel_homepage: { type: String, required: false }
});
const Channels = x.model('Channel_informations', exports.ChannelSchema);
exports.default = Channels;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbHMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjaGFubmVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTNCLFlBQVk7QUFDWixNQUFNLEdBQUcsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO0FBRXRELFlBQVk7QUFDWixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUU7SUFDaEQsSUFBSSxHQUFHLEVBQUU7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUMzQjtTQUFNO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBQ3ZDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFVSxRQUFBLGFBQWEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDN0MsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0lBQ3JDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtJQUNoRCxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7SUFDbkQsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7SUFDcEQsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Q0FDdkQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxxQkFBYSxDQUFDLENBQUM7QUFDaEUsa0JBQWUsUUFBUSxDQUFDIn0=