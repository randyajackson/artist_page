"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allKeywords = void 0;
const keywords_1 = require("./../keywords");
//Get - /youtubeKeywords returns all recent songs
exports.allKeywords = (req, res) => {
    let youtube_keywords = keywords_1.default.find((err, youtube_keywords) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log("good");
            console.log(youtube_keywords);
            res.send(youtube_keywords);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9rZXl3b3JkQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0Q0FBcUM7QUFFckMsaURBQWlEO0FBQ3RDLFFBQUEsV0FBVyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRXJELElBQUksZ0JBQWdCLEdBQUcsa0JBQVEsQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFRLEVBQUUsZ0JBQXFCLEVBQUUsRUFBRTtRQUN0RSxJQUFHLEdBQUcsRUFBRTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMifQ==