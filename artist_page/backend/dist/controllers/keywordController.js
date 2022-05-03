"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keywordExact = exports.keywordByKeyword = exports.allKeywords = void 0;
const keywords_1 = require("./../keywords");
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
//Get - /youtubeKeywords returns all recent songs
let allKeywords = (req, res) => {
    let youtube_keywords = keywords_1.default.aggregate([{ $sample: { size: 150 } }], function (err, youtube_keywords) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(youtube_keywords);
        }
    });
};
exports.allKeywords = allKeywords;
//Get - /youtubeKeywords/keyword returns keyword by name likeness
let keywordByKeyword = (req, res) => {
    let youtube_keywords = keywords_1.default.find({ "keyword": { $regex: "^" + decode(req.params.keyword) } }, function (err, youtube_keywords) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(youtube_keywords);
        }
    });
};
exports.keywordByKeyword = keywordByKeyword;
//Get - /youtubeKeywords/keyword returns exact keyword
let keywordExact = (req, res) => {
    let youtube_keywords = keywords_1.default.find({ "keyword": { $regex: "^" + decode(req.params.keyword) + "$" } }, function (err, youtube_keywords) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(youtube_keywords);
        }
    });
};
exports.keywordExact = keywordExact;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9rZXl3b3JkQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0Q0FBcUM7QUFDckMsWUFBWTtBQUNaLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQ3BDLEdBQUc7S0FDRixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztLQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUN6QixDQUFDLE9BQU8sQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUUvQyxpREFBaUQ7QUFDMUMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFckQsSUFBSSxnQkFBZ0IsR0FBRyxrQkFBUSxDQUFDLFNBQVMsQ0FBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxVQUFTLEdBQVEsRUFBRSxnQkFBcUI7UUFDOUcsSUFBRyxHQUFHLEVBQUU7WUFDSixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQztBQVZTLFFBQUEsV0FBVyxlQVVwQjtBQUVGLGlFQUFpRTtBQUMxRCxJQUFJLGdCQUFnQixHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRTFELElBQUksZ0JBQWdCLEdBQUcsa0JBQVEsQ0FBQyxJQUFJLENBQUUsRUFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUMsRUFBRSxVQUFTLEdBQUcsRUFBRSxnQkFBZ0I7UUFDM0gsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQ0k7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDOUI7SUFFTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQVhTLFFBQUEsZ0JBQWdCLG9CQVd6QjtBQUVGLHNEQUFzRDtBQUMvQyxJQUFJLFlBQVksR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUV0RCxJQUFJLGdCQUFnQixHQUFHLGtCQUFRLENBQUMsSUFBSSxDQUFFLEVBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBQyxFQUFFLFVBQVMsR0FBRyxFQUFFLGdCQUFnQjtRQUNqSSxJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFDSTtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUM5QjtJQUVMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBWFMsUUFBQSxZQUFZLGdCQVdyQiJ9