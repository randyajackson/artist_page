"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvYXJ0aXN0UGFnZS9hcnRpc3RfcGFnZS9hcnRpc3RfcGFnZS9iYWNrZW5kL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3JlY2VudENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwQ0FBdUM7QUFFdkMsd0NBQXdDO0FBQzdCLFFBQUEsVUFBVSxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRXBELElBQUksWUFBWSxHQUFHLGlCQUFXLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBUSxFQUFFLFlBQWlCLEVBQUUsRUFBRTtRQUNqRSxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNCLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyJ9