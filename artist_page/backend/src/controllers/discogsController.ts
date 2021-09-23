import { Request, Response } from 'express';
import Discogs from './../discogs';
//@ts-ignore
const decode = str => decodeURIComponent(
    str
    .replace(/\%20/g, ' ')
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

//Get - /discogs returns all albums
export let allDiscogs = (req: Request, res: Response) => {

    let discogs = Discogs.find({}).sort({ "created_at": -1 }).exec( (err: any, discogs: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(discogs);
        }    
    });

};

//Get - /discogs/genre returns album by containing genre
export let albumsByGenre = (req: Request, res: Response) => {
    //db.new_record_purchasables.find({ $or: [{"genres":{ $regex: "^New" }}, {"styles":{ $regex: "^New" }}] })
    let discogs = Discogs.find( { $or: [{"genres":{ $regex:  "^" + decode(req.params.genre) + "$" }}, {"styles":{ $regex:  "^" + decode(req.params.genre) }}] } ,function(err, discogs) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(discogs);
        }

    });
};

//Get - /discogs/max_price/ returns albums less than maximum price
export let albumsByPrice = (req: Request, res: Response) => {
    
    let discogs = Discogs.find( { "lowest_price": { $lte: String(req.params.max_price) } } ,function(err, discogs) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(discogs);
        }
        console.log(req.params.max_price);
    });
};