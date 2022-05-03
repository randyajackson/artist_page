"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArtist = exports.deleteArtist = exports.addArtist = exports.getArtist = exports.allArtist = exports.artistByName = void 0;
const artists_1 = require("./../artists");
//@ts-ignore
const decode = str => decodeURIComponent(str
    .replace(/\%2D/g, '-')
    .replace(/\%5F/g, '_')
    .replace(/\%2E/g, '.')
    .replace(/\%21/g, '!')
    .replace(/\%7E/g, '~')
    .replace(/\%2A/g, '*')
    .replace(/\%27/g, "'")
    .replace(/\%28/g, '(')
    .replace(/\%29/g, ')')).replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, "\\$&");
//Get - /artists/name returns artist by name likeness
let artistByName = (req, res) => {
    let artists = artists_1.default.find({ "name": { $regex: decode(req.params.name), $options: 'i' } }, function (err, artists) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(artists);
        }
    });
};
exports.artistByName = artistByName;
//Get - /artists returns all artists
let allArtist = (req, res) => {
    let artists = artists_1.default.find((err, artists) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(artists);
        }
    });
};
exports.allArtist = allArtist;
//Get - /artists/{1} returns artist with id 1
let getArtist = (req, res) => {
    artists_1.default.findById(req.params.id, (err, artists) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(artists);
        }
    });
};
exports.getArtist = getArtist;
//Put - /artist inserts a new artist into the table
let addArtist = (req, res) => {
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
exports.addArtist = addArtist;
//Delete - /artists/{1} deletes artists with id of 1
let deleteArtist = (req, res) => {
    artists_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully deleted the artist");
        }
    });
};
exports.deleteArtist = deleteArtist;
//POST - /artists/{1} updates an artist with id of 1
let updateArtist = (req, res) => {
    artists_1.default.findByIdAndUpdate(req.params.id, req.body, (err, artist) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully updated artist");
        }
    });
};
exports.updateArtist = updateArtist;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2FydGlzdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMENBQW1DO0FBRW5DLFlBQVk7QUFDWixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUNwQyxHQUFHO0tBQ0YsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7S0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7S0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7S0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7S0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7S0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7S0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7S0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7S0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FDekIsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFL0MscURBQXFEO0FBQzlDLElBQUksWUFBWSxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRXRELElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUMsRUFBQyxFQUFFLFVBQVMsR0FBRyxFQUFFLE9BQU87UUFDMUcsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQ0k7WUFDRCxHQUFH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