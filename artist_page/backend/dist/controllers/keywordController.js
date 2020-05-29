"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allKeywords = void 0;
const keywords_1 = require("./../keywords");
//Get - /youtubeKeywords returns all recent songs
exports.allKeywords = (req, res) => {
    let youtube_keywords = keywords_1.default.find((err, youtube_keywords) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(youtube_keywords);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9rZXl3b3JkQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0Q0FBcUM7QUFFckMsaURBQWlEO0FBQ3RDLFFBQUEsV0FBVyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRXJELElBQUksZ0JBQWdCLEdBQUcsa0JBQVEsQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFRLEVBQUUsZ0JBQXFCLEVBQUUsRUFBRTtRQUN0RSxJQUFHLEdBQUcsRUFBRTtZQUNKLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDIn0=