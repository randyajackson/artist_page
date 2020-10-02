"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoByKeyword = void 0;
const videos_1 = require("./../videos");
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
//Get - /youtubeKeywords/keyword returns artist by name likeness
exports.videoByKeyword = (req, res) => {
    let youtube_videos = videos_1.default.find({ "video_tags": { $regex: "^" + decode(req.params.keyword) + "$" } }).sort({ 'video_publish_date': 'descending' }).exec(function (err, youtube_videos) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(youtube_videos);
        }
        console.log(decode(req.params.keyword));
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW9Db250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvdmlkZW9Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHdDQUFpQztBQUVqQyxZQUFZO0FBQ1osTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDcEMsR0FBRztLQUNGLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0tBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0tBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0tBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0tBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0tBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0tBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0tBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0tBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQ3pCLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRS9DLGdFQUFnRTtBQUNyRCxRQUFBLGNBQWMsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUV4RCxJQUFJLGNBQWMsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBRSxFQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLG9CQUFvQixFQUFFLFlBQVksRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsR0FBUSxFQUFFLGNBQW1CO1FBQ3pMLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUNJO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyJ9