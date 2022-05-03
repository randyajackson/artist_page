"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumsByPrice = exports.albumsByGenre = exports.nextAllDiscogs = exports.getAllGenres = exports.firstAllDiscogs = void 0;
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
let firstAllDiscogs = (req, res) => {
    let discogs = discogs_1.default.find({}).sort({ "created_at": -1 }).limit(100).exec((err, discogs) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(discogs);
        }
    });
};
exports.firstAllDiscogs = firstAllDiscogs;
//Get - /discogs/styles returns array of all styles
let getAllGenres = (req, res) => {
    let discogs = discogs_1.default.distinct("genres").exec((err, discogs) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(discogs);
        }
    });
};
exports.getAllGenres = getAllGenres;
//Get - /discogs/:date returns next 100 records
let nextAllDiscogs = (req, res) => {
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
exports.nextAllDiscogs = nextAllDiscogs;
//Get - /discogs/genre/:genres returns album by containing genre
let albumsByGenre = (req, res) => {
    let discogs = discogs_1.default.aggregate([{ "$match": { "genres": { $all: req.query.genres } } }, { "$sort": { "created_at": -1 } }]).exec((err, discogs) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(discogs);
        }
    });
};
exports.albumsByGenre = albumsByGenre;
//Get - /discogs/max_price/ returns albums less than maximum price
let albumsByPrice = (req, res) => {
    let discogs = discogs_1.default.find({ "lowest_price": { $lte: String(req.params.max_price) } }, function (err, discogs) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(discogs);
        }
    });
};
exports.albumsByPrice = albumsByPrice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY29nc0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9kaXNjb2dzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwQ0FBbUM7QUFDbkMsWUFBWTtBQUNaLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQ3BDLEdBQUc7S0FDRixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUN6QixDQUFDLE9BQU8sQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUUvQywwQ0FBMEM7QUFDbkMsSUFBSSxlQUFlLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFekQsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBUSxFQUFFLE9BQVksRUFBRSxFQUFFO1FBQ2xHLElBQUcsR0FBRyxFQUFFO1lBQ0osR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDO0FBVlMsUUFBQSxlQUFlLG1CQVV4QjtBQUVGLG1EQUFtRDtBQUM1QyxJQUFJLFlBQVksR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUV0RCxJQUFJLE9BQU8sR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFRLEVBQUUsT0FBWSxFQUFFLEVBQUU7UUFDdEUsSUFBRyxHQUFHLEVBQUU7WUFDSixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUM7QUFWUyxRQUFBLFlBQVksZ0JBVXJCO0FBRUYsK0NBQStDO0FBQ3hDLElBQUksY0FBYyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRXhELE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFOUMsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUUsRUFBRSxZQUFZLEVBQUcsRUFBRSxHQUFHLEVBQUcsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBRSxDQUFDLEdBQVEsRUFBRSxPQUFZLEVBQUUsRUFBRTtRQUN6SSxJQUFHLEdBQUcsRUFBRTtZQUNKLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQztBQVpTLFFBQUEsY0FBYyxrQkFZdkI7QUFFRixnRUFBZ0U7QUFDekQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDdkQsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFDLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVEsRUFBRSxPQUFXLEVBQUUsRUFBRTtRQUNwSixJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFDSTtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7SUFFTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQVZTLFFBQUEsYUFBYSxpQkFVdEI7QUFFRixrRUFBa0U7QUFDM0QsSUFBSSxhQUFhLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFdkQsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVMsR0FBRyxFQUFFLE9BQU87UUFDekcsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQ0k7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFWUyxRQUFBLGFBQWEsaUJBVXRCIn0=