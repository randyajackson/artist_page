import * as mongoose from 'mongoose';
require('dotenv').config();

const uri: string = process.env.MONGOOSE_URL;

let y = mongoose.createConnection(uri, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Connected to MongoDB");
    }
});

export const ArtistSchema = new mongoose.Schema({
    id: {type:Number, required: false},
    name: {type:String, required: false},
    image: {type:String, required: false},

    facebook: {type:String, required: false},
    facebook2: {type:String, required: false},
    facebook3: {type:String, required: false},

    instagram: {type:String, required: false},
    instagram2: {type:String, required: false},
    instagram3: {type:String, required: false},

    tumblr: {type:String, required: false},
    tumblr2: {type:String, required: false},
    tumblr3: {type:String, required: false},

    twitter: {type:String, required: false}, 
    twitter2: {type:String, required: false},
    twitter3: {type:String, required: false},

    soundCloud: {type:String, required: false},
    soundCloud2: {type:String, required: false},
    soundCloud3: {type:String, required: false},

    residentAdvisor: {type:String, required: false},
    residentAdvisor2: {type:String, required: false},
    residentAdvisor3: {type:String, required: false},

    bandCamp: {type:String, required: false},
    bandCamp2: {type:String, required: false},
    bandCamp3: {type:String, required: false},

    spotify:  {type:String, required: false},
    spotify2:  {type:String, required: false},
    spotify3:  {type:String, required: false},

    mixCloud: {type:String, required: false},
    mixCloud2: {type:String, required: false},
    mixCloud3: {type:String, required: false},

    songKick: {type:String, required: false},
    songKick2: {type:String, required: false},
    songKick3: {type:String, required: false},

    youTube: {type:String, required: false},
    youTube2: {type:String, required: false},
    youTube3: {type:String, required: false},

    discogs: {type:String, required: false},
    discogs2: {type:String, required: false},
    discogs3: {type:String, required: false},
    discogs4: {type:String, required: false},
    discogs5: {type:String, required: false},

    paypal: {type:String, required: false},
    external: {type:String, required: false},
    email: {type:String, required: false},
    description: {type:String, required: false},
    events: {type:String, required: false},
    tags: {type:String, required: false}
});

const Artists = y.model('Artists', ArtistSchema);
export default Artists;