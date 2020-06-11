"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelByVideo = void 0;
const channels_1 = require("./../channels");
//Get - /youtubeKeywords/keyword returns artist by name likeness
exports.channelByVideo = (req, res) => {
    let channel_informations = channels_1.default.find({ "channel_name": { $regex: decodeURIComponent(req.params.video_owner), $options: 'i' } }, function (err, channel_informations) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(channel_informations);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9jaGFubmVsQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0Q0FBcUM7QUFFckMsZ0VBQWdFO0FBQ3JELFFBQUEsY0FBYyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRXhELElBQUksb0JBQW9CLEdBQUcsa0JBQVEsQ0FBQyxJQUFJLENBQUUsRUFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDLEVBQUMsRUFBRSxVQUFTLEdBQUcsRUFBRSxvQkFBb0I7UUFDaEssSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQ0k7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyJ9