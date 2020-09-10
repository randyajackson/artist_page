"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keywordByKeyword = exports.allKeywords = void 0;
const keywords_1 = require("./../keywords");
//Get - /youtubeKeywords returns all recent songs
exports.allKeywords = (req, res) => {
    let youtube_keywords = keywords_1.default.aggregate([{ $sample: { size: 150 } }], function (err, youtube_keywords) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(youtube_keywords);
        }
    });
};
//Get - /youtubeKeywords/keyword returns keyword by name likeness
exports.keywordByKeyword = (req, res) => {
    let youtube_keywords = keywords_1.default.find({ "keyword": { $regex: decodeURIComponent(req.params.keyword), $options: 'i' } }, function (err, youtube_keywords) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(youtube_keywords);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9rZXl3b3JkQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0Q0FBcUM7QUFFckMsaURBQWlEO0FBQ3RDLFFBQUEsV0FBVyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRXJELElBQUksZ0JBQWdCLEdBQUcsa0JBQVEsQ0FBQyxTQUFTLENBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsVUFBUyxHQUFRLEVBQUUsZ0JBQXFCO1FBQzlHLElBQUcsR0FBRyxFQUFFO1lBQ0osR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUM7QUFFRixpRUFBaUU7QUFDdEQsUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUUxRCxJQUFJLGdCQUFnQixHQUFHLGtCQUFRLENBQUMsSUFBSSxDQUFFLEVBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBQyxFQUFDLEVBQUUsVUFBUyxHQUFHLEVBQUUsZ0JBQWdCO1FBQy9JLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUNJO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMifQ==