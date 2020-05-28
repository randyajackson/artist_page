"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRecents = void 0;
const recents_1 = require("./../recents");
//Get - /recent returns all recent songs
exports.allRecents = (req, res) => {
    let recent_songs = recents_1.default.find((err, recent_songs) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(recent_songs);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3JlY2VudENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMENBQXVDO0FBRXZDLHdDQUF3QztBQUM3QixRQUFBLFVBQVUsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUVwRCxJQUFJLFlBQVksR0FBRyxpQkFBVyxDQUFDLElBQUksQ0FBRSxDQUFDLEdBQVEsRUFBRSxZQUFpQixFQUFFLEVBQUU7UUFDakUsSUFBRyxHQUFHLEVBQUU7WUFDSixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMifQ==