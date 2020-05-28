"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArtist = exports.deleteArtist = exports.addArtist = exports.getArtist = exports.allArtist = exports.artistByName = void 0;
const artists_1 = require("./../artists");
//Get - /artists/name returns artist by name likeness
exports.artistByName = (req, res) => {
    let artists = artists_1.default.find({ "name": { $regex: req.params.name, $options: 'i' } }, function (err, artists) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(artists);
        }
    });
};
//Get - /artists returns all artists
exports.allArtist = (req, res) => {
    let artists = artists_1.default.find((err, artists) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(artists);
        }
    });
};
//Get - /artists/{1} returns artist with id 1
exports.getArtist = (req, res) => {
    artists_1.default.findById(req.params.id, (err, artists) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(artists);
        }
    });
};
//Put - /artist inserts a new artist into the table
exports.addArtist = (req, res) => {
    let artist = new artists_1.default(req.body);
    artist.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(artist);
        }
    });
};
//Delete - /artists/{1} deletes artists with id of 1
exports.deleteArtist = (req, res) => {
    artists_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully deleted the artist");
        }
    });
};
//POST - /artists/{1} updates an artist with id of 1
exports.updateArtist = (req, res) => {
    artists_1.default.findByIdAndUpdate(req.params.id, req.body, (err, artist) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully updated artist");
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2FydGlzdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMENBQW1DO0FBRW5DLHFEQUFxRDtBQUMxQyxRQUFBLFlBQVksR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUV0RCxJQUFJLE9BQU8sR0FBRyxpQkFBTyxDQUFDLElBQUksQ0FBRSxFQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDLEVBQUMsRUFBRSxVQUFTLEdBQUcsRUFBRSxPQUFPO1FBQ2xHLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUNJO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUYsb0NBQW9DO0FBQ3pCLFFBQUEsU0FBUyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRW5ELElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBUSxFQUFFLE9BQVksRUFBRSxFQUFFO1FBQ25ELElBQUcsR0FBRyxFQUFFO1lBQ0osR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFBO0FBRUQsNkNBQTZDO0FBQ2xDLFFBQUEsU0FBUyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ25ELGlCQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBUSxFQUFFLE9BQVksRUFBRSxFQUFFO1FBQ3ZELElBQUcsR0FBRyxFQUFFO1lBQ0osR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBO0FBRUQsbURBQW1EO0FBQ3hDLFFBQUEsU0FBUyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ25ELElBQUksTUFBTSxHQUFHLElBQUksaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO1FBQ3RCLElBQUcsR0FBRyxFQUFFO1lBQ0osR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBO0FBRUQsb0RBQW9EO0FBQ3pDLFFBQUEsWUFBWSxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3RELGlCQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtRQUNuRCxJQUFHLEdBQUcsRUFBQztZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUMvQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBRUQsb0RBQW9EO0FBQ3pDLFFBQUEsWUFBWSxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3RELGlCQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQVEsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUN6RSxJQUFHLEdBQUcsRUFBRTtZQUNKLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIn0=