import { Request, Response } from 'express';
import Videos from './../videos';

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

//Get - /youtubeKeywords/keyword returns artist by name likeness
export let videoByKeyword = (req: Request, res: Response) => {

    let youtube_videos = Videos.find( {"video_tags": { $regex: decode(req.params.keyword), $options: 'i'} }).sort({_id : 'ascending'}).exec(function(err: any, youtube_videos: any) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(youtube_videos);
        }
    });
};