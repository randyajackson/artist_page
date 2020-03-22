"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var uri = 'mongodb://localhost/artists';
mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected to MongoDB");
    }
});
exports.ArtistSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    soundCloud: { type: String, required: false },
    youTube: { type: String, required: false },
    instagram: { type: String, required: false },
    paypal: { type: String, required: false },
    email: { type: String, required: false },
    description: { type: String, required: false },
    events: { type: String, required: false },
    tags: { type: String, required: false }
});
var Artists = mongoose.model('Artists', exports.ArtistSchema);
exports["default"] = Artists;
