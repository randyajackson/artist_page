import { Request, Response } from 'express';
import Videos from './../videos';

//Get - /youtubeKeywords/keyword returns artist by name likeness
export let videoByKeyword = (req: Request, res: Response) => {

    let youtube_videos = Videos.find( {"video_tags": { $regex: decodeURIComponent(req.params.keyword), $options: 'i'} } ,function(err, youtube_videos) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(youtube_videos);
        }
    });
};