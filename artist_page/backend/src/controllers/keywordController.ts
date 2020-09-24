import { Request, Response } from 'express';
import Keywords from './../keywords';
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

//Get - /youtubeKeywords returns all recent songs
export let allKeywords = (req: Request, res: Response) => {

    let youtube_keywords = Keywords.aggregate( [{ $sample: { size: 150 } }] , function(err: any, youtube_keywords: any) {
        if(err) {
            res.send(err);
        } else {
            res.send(youtube_keywords);
        }    
    });

};

//Get - /youtubeKeywords/keyword returns keyword by name likeness
export let keywordByKeyword = (req: Request, res: Response) => {

    let youtube_keywords = Keywords.find( {"keyword": { $regex: decode(req.params.keyword), $options: 'i'}} ,function(err, youtube_keywords) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(youtube_keywords);
        }
    });
};