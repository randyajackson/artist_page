import { Request, Response } from 'express';
import Channels from './../channels';

//Get - /youtubeKeywords/keyword returns artist by name likeness
export let channelByVideo = (req: Request, res: Response) => {

    let channel_informations = Channels.find( {"channel_name": { $regex: decodeURIComponent(req.params.video_owner), $options: 'i'}} ,function(err, channel_informations) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(channel_informations);
        }
    });
};