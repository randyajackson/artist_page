"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumsByPrice = exports.albumsByGenre = exports.nextAllDiscogs = exports.firstAllDiscogs = void 0;
const discogs_1 = require("./../discogs");
//@ts-ignore
const decode = str => decodeURIComponent(str
    .replace(/\%20/g, ' ')
    .replace(/\%2D/g, '-')
    .replace(/\%5F/g, '_')
    .replace(/\%2E/g, '.')
    .replace(/\%21/g, '!')
    .replace(/\%7E/g, '~')
    .replace(/\%2A/g, '*')
    .replace(/\%27/g, "'")
    .replace(/\%28/g, '(')
    .replace(/\%29/g, ')')).replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, "\\$&");
//Get - /discogs returns first 100 records
exports.firstAllDiscogs = (req, res) => {
    let discogs = discogs_1.default.find({}).sort({ "created_at": -1 }).limit(100).exec((err, discogs) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(discogs);
        }
    });
};
//Get - /discogs/:date returns next 100 records
exports.nextAllDiscogs = (req, res) => {
    const queryString = new Date(req.params.date);
    let discogs = discogs_1.default.find({ "created_at": { $lt: queryString } }).sort({ "created_at": -1 }).limit(100).exec((err, discogs) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(discogs);
        }
    });
};
//Get - /discogs/genre returns album by containing genre
exports.albumsByGenre = (req, res) => {
    //db.new_record_purchasables.find({ $or: [{"genres":{ $regex: "^New" }}, {"styles":{ $regex: "^New" }}] })
    let discogs = discogs_1.default.find({ $or: [{ "genres": { $regex: "^" + decode(req.params.genre) + "$" } }, { "styles": { $regex: "^" + decode(req.params.genre) } }] }, function (err, discogs) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(discogs);
        }
    });
};
//Get - /discogs/max_price/ returns albums less than maximum price
exports.albumsByPrice = (req, res) => {
    let discogs = discogs_1.default.find({ "lowest_price": { $lte: String(req.params.max_price) } }, function (err, discogs) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(discogs);
        }
        console.log(req.params.max_price);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY29nc0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9kaXNjb2dzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwQ0FBbUM7QUFDbkMsWUFBWTtBQUNaLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQ3BDLEdBQUc7S0FDRixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUN6QixDQUFDLE9BQU8sQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUUvQywwQ0FBMEM7QUFDL0IsUUFBQSxlQUFlLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFekQsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBUSxFQUFFLE9BQVksRUFBRSxFQUFFO1FBQ2xHLElBQUcsR0FBRyxFQUFFO1lBQ0osR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDO0FBRUYsK0NBQStDO0FBQ3BDLFFBQUEsY0FBYyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRXhELE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFOUMsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUUsRUFBRSxZQUFZLEVBQUcsRUFBRSxHQUFHLEVBQUcsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBRSxDQUFDLEdBQVEsRUFBRSxPQUFZLEVBQUUsRUFBRTtRQUN6SSxJQUFHLEdBQUcsRUFBRTtZQUNKLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQztBQUVGLHdEQUF3RDtBQUM3QyxRQUFBLGFBQWEsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN2RCwwR0FBMEc7SUFDMUcsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLE1BQU0sRUFBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxFQUFFLE1BQU0sRUFBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsRUFBRSxVQUFTLEdBQUcsRUFBRSxPQUFPO1FBQzlLLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUNJO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtJQUVMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUYsa0VBQWtFO0FBQ3ZELFFBQUEsYUFBYSxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRXZELElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFTLEdBQUcsRUFBRSxPQUFPO1FBQ3pHLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUNJO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyJ9