"use strict";
exports.__esModule = true;
var artists_1 = require("./../artists");
//Get - /artists returns all artists
exports.allArtist = function (req, res) {
    var artists = artists_1["default"].find(function (err, artists) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(artists);
        }
    });
};
//Get - /artists/{1} returns artist with id 1
exports.getArtist = function (req, res) {
    artists_1["default"].findById(req.params.id, function (err, artists) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(artists);
        }
    });
};
//Put - /artist inserts a new artist into the table
exports.addArtist = function (req, res) {
    var artist = new artists_1["default"](req.body);
    artist.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(artist);
        }
    });
};
//Delete - /artists/{1} deletes artists with id of 1
exports.deleteArtist = function (req, res) {
    artists_1["default"].deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully deleted the artist");
        }
    });
};
//POST - /artists/{1} updates an artist with id of 1
exports.updateArtist = function (req, res) {
    artists_1["default"].findByIdAndUpdate(req.params.id, req.body, function (err, artist) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully updated artist");
        }
    });
};
