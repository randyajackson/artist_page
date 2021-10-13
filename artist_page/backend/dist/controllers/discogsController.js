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
    let discogs = discogs_1.default.find({}, { link: 1, genres: 1, styles: 1, release_year: 1, lowest_price: 1, created_at: 1, cover_art: 1 }).sort({ "created_at": -1 }).limit(100).exec((err, discogs) => {
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
    let discogs = discogs_1.default.find({}, { link: 1, genres: 1, styles: 1, release_year: 1, lowest_price: 1, created_at: 1, cover_art: 1 }).sort({ "created_at": -1 }).exec((err, discogs) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY29nc0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9kaXNjb2dzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwQ0FBbUM7QUFDbkMsWUFBWTtBQUNaLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQ3BDLEdBQUc7S0FDRixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUN6QixDQUFDLE9BQU8sQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUUvQywwQ0FBMEM7QUFDL0IsUUFBQSxlQUFlLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFekQsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFDLENBQUMsRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUUsWUFBWSxFQUFDLENBQUMsRUFBRSxZQUFZLEVBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFB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