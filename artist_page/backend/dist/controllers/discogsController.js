"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumsByPrice = exports.albumsByGenre = exports.allDiscogs = void 0;
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
//Get - /discogs returns all albums
exports.allDiscogs = (req, res) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY29nc0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9kaXNjb2dzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwQ0FBbUM7QUFDbkMsWUFBWTtBQUNaLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQ3BDLEdBQUc7S0FDRixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUN6QixDQUFDLE9BQU8sQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUUvQyxtQ0FBbUM7QUFDeEIsUUFBQSxVQUFVLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFcEQsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFDLENBQUMsRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUUsWUFBWSxFQUFDLENBQUMsRUFBRSxZQUFZLEVBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFRLEVBQUUsT0FBWSxFQUFFLEVBQUU7UUFDaEwsSUFBRyxHQUFHLEVBQUU7WUFDSixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUM7QUFFRix3REFBd0Q7QUFDN0MsUUFBQSxhQUFhLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDdkQsMEdBQTBHO0lBQzFHLElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxNQUFNLEVBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsRUFBRSxNQUFNLEVBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUUsVUFBUyxHQUFHLEVBQUUsT0FBTztRQUM5SyxJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFDSTtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7SUFFTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLGtFQUFrRTtBQUN2RCxRQUFBLGFBQWEsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUV2RCxJQUFJLE9BQU8sR0FBRyxpQkFBTyxDQUFDLElBQUksQ0FBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBUyxHQUFHLEVBQUUsT0FBTztRQUN6RyxJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFDSTtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMifQ==