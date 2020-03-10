"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const artists_1 = require("./../artists");

//Get - /artists/name returns artist by name likeness
exports.artistByName = (req, res) => {
    console.log(req.params.name);
    let artists = artists_1.default.find( {"name": { $regex: req.params.name, $options: 'i'}} ,function(err, artists) {
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
//Delete - /artists/5e1a1cba37a4e054fd86818e deletes artists with _id of 5e1a1cba37a4e054fd86818e
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2FydGlzdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwQ0FBbUM7QUFHbkMsb0NBQW9DO0FBQ3pCLFFBQUEsU0FBUyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRW5ELElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBUSxFQUFFLE9BQVksRUFBRSxFQUFFO1FBQ25ELElBQUcsR0FBRyxFQUFFO1lBQ0osR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFBO0FBRUQsNkNBQTZDO0FBQ2xDLFFBQUEsU0FBUyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ25ELGlCQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBUSxFQUFFLE9BQVksRUFBRSxFQUFFO1FBQ3ZELElBQUcsR0FBRyxFQUFFO1lBQ0osR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBO0FBRUQsbURBQW1EO0FBQ3hDLFFBQUEsU0FBUyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ25ELElBQUksTUFBTSxHQUFHLElBQUksaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO1FBQ3RCLElBQUcsR0FBRyxFQUFFO1lBQ0osR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBO0FBRUQsb0RBQW9EO0FBQ3pDLFFBQUEsWUFBWSxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3RELGlCQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtRQUNuRCxJQUFHLEdBQUcsRUFBQztZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUMvQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBRUQsb0RBQW9EO0FBQ3pDLFFBQUEsWUFBWSxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3RELGlCQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQVEsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUN6RSxJQUFHLEdBQUcsRUFBRTtZQUNKLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIn0=