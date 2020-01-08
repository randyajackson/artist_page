const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const artistSchema = new Schema({
   id : Number,
   artist_name: String,
   artist_soundcloud : String,
   artist_instagram : String,
   artist_paypal : String,
   artist_description : String,
   artist_tags : String

});

const Artist_Info = mongoose.model('Artist_Info', artistSchema);

module.exports = Artist_Info;