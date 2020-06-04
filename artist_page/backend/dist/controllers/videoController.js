"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoByKeyword = void 0;
const videos_1 = require("./../videos");
//Get - /youtubeKeywords/keyword returns artist by name likeness
exports.videoByKeyword = (req, res) => {
    let youtube_videos = videos_1.default.find({ "video_tags": { $regex: decodeURIComponent(req.params.keyword), $options: 'i' } }, function (err, youtube_videos) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(youtube_videos);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW9Db250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvdmlkZW9Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHdDQUFpQztBQUVqQyxnRUFBZ0U7QUFDckQsUUFBQSxjQUFjLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFeEQsSUFBSSxjQUFjLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUUsRUFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBRSxVQUFTLEdBQUcsRUFBRSxjQUFjO1FBQzdJLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUNJO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM1QjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDIn0=