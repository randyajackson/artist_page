import * as mongoose from 'mongoose';

const uri: string = 'mongodb://localhost/artists';

mongoose.connect(uri, (err: any) => {
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
    tumblr: {type:String, required: false},
    soundCloud: {type:String, required: false},
    mixCloud: {type:String, required: false},
    external: {type:String, required: false},
    facebook: {type:String, required: false},
    youTube: {type:String, required: false},
    instagram: {type:String, required: false},
    paypal: {type:String, required: false},
    email: {type:String, required: false},
    description: {type:String, required: false},
    events: {type:String, required: false},
    tags: {type:String, required: false}
});

const Artists = mongoose.model('Artists', ArtistSchema);
export default Artists;