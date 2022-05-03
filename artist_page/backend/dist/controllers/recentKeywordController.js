"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allKeywords = void 0;
const recent_keywords_1 = require("./../recent_keywords");
//Get - /youtubeRecentKeywords returns all recent songs
let allKeywords = (req, res) => {
    let recent_keywords = recent_keywords_1.default.find((err, recent_keywords) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(recent_keywords);
        }
    });
};
exports.allKeywords = allKeywords;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50S2V5d29yZENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9yZWNlbnRLZXl3b3JkQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBbUQ7QUFFbkQsdURBQXVEO0FBQ2hELElBQUksV0FBVyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRXJELElBQUksZUFBZSxHQUFHLHlCQUFlLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBUSxFQUFFLGVBQW9CLEVBQUUsRUFBRTtRQUMzRSxJQUFHLEdBQUcsRUFBRTtZQUNKLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQztBQVZTLFFBQUEsV0FBVyxlQVVwQiJ9