import { Request, Response } from 'express';
import Channels from './../channels';

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

//Get - /youtubeKeywords/ returns all recent songs
export let channels = (req: Request, res: Response) => {

    let channel_informations = Channels.find( (err: any, channel_informations: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(channel_informations);
        }    
    });

};

//Get - /youtubeKeywords/keyword returns artist by name likeness
export let channelByVideo = (req: Request, res: Response) => {

    let channel_informations = Channels.find( {"channel_name": decodeURIComponent(req.params.video_owner)} ,function(err, channel_informations) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(channel_informations);
        }
    });
};