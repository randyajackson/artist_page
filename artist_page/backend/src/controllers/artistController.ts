import { Request, Response } from 'express';
import Artists from './../artists';

//@ts-ignore
const decode = str => decodeURIComponent(
    str
    .replace(/\%2D/g, '-')
    .replace(/\%5F/g, '_')
    .replace(/\%2E/g, '.')
    .replace(/\%21/g, '!')
    .replace(/\%7E/g, '~')
    .replace(/\%2A/g, '*')
    .replace(/\%27/g, "'")
    .replace(/\%28/g, '(')
    .replace(/\%29/g, ')')
).replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, "\\$&");

//Get - /artists/name returns artist by name likeness
export let artistByName = (req: Request, res: Response) => {

    let artists = Artists.find( {"name": { $regex: decode(req.params.name), $options: 'i'}} ,function(err, artists) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(artists);
        }
    });
};

//Get - /artists returns all artists
export let allArtist = (req: Request, res: Response) => {

    let artists = Artists.find( (err: any, artists: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(artists);
        }    
    });

}

//Get - /artists/{1} returns artist with id 1
export let getArtist = (req: Request, res: Response) => {
    Artists.findById(req.params.id, (err: any, artists: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(artists);
        }
    });    
}

//Put - /artist inserts a new artist into the table
export let addArtist = (req: Request, res: Response) => {
    let artist = new Artists(req.body);
    artist.save( (err: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(artist);
        }    
    });
}

//Delete - /artists/{1} deletes artists with id of 1
export let deleteArtist = (req: Request, res: Response) => {
    Artists.deleteOne({ _id: req.params.id }, (err: any) => {
        if(err){
            res.send(err);
        } else {
            res.send("Successfully deleted the artist");
        }
    })    
}

//POST - /artists/{1} updates an artist with id of 1
export let updateArtist = (req: Request, res: Response) => {
    Artists.findByIdAndUpdate(req.params.id, req.body, (err: any, artist: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send("Successfully updated artist");
        }    
    })    
}