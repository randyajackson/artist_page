"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelByVideo = exports.channels = void 0;
const channels_1 = require("./../channels");
//@ts-ignore
const decode = str => decodeURIComponent(str
    .replace(/\%2D/g, '-')
    .replace(/\%5F/g, '_')
    .replace(/\%2E/g, '.')
    .replace(/\%21/g, '!')
    .replace(/\%7E/g, '~')
    .replace(/\%2A/g, '*')
    .replace(/\%27/g, "'")
    .replace(/\%28/g, '(')
    .replace(/\%29/g, ')')).replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, "\\$&");
//Get - /youtubeKeywords/ returns all recent songs
let channels = (req, res) => {
    let channel_informations = channels_1.default.find((err, channel_informations) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(channel_informations);
        }
    });
};
exports.channels = channels;
//Get - /youtubeKeywords/keyword returns artist by name likeness
let channelByVideo = (req, res) => {
    let channel_informations = channels_1.default.find({ "channel_name": decodeURIComponent(req.params.video_owner) }, function (err, channel_informations) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(channel_informations);
        }
    });
};
exports.channelByVideo = channelByVideo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9jaGFubmVsQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0Q0FBcUM7QUFFckMsWUFBWTtBQUNaLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQ3BDLEdBQUc7S0FDRixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUN6QixDQUFDLE9BQU8sQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUUvQyxrREFBa0Q7QUFDM0MsSUFBSSxRQUFRLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFbEQsSUFBSSxvQkFBb0IsR0FBRyxrQkFBUSxDQUFDLElBQUksQ0FBRSxDQUFDLEdBQVEsRUFBRSxvQkFBeUIsRUFBRSxFQUFFO1FBQzlFLElBQUcsR0FBRyxFQUFFO1lBQ0osR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUM7QUFWUyxRQUFBLFFBQVEsWUFVakI7QUFFRixnRUFBZ0U7QUFDekQsSUFBSSxjQUFjLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFeEQsSUFBSSxvQkFBb0IsR0FBRyxrQkFBUSxDQUFDLElBQUksQ0FBRSxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEVBQUUsVUFBUyxHQUFHLEVBQUUsb0JBQW9CO1FBQ3RJLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUNJO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFWUyxRQUFBLGNBQWMsa0JBVXZCIn0=