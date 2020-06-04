import { Request, Response } from 'express';
import Keywords from './../keywords';

//Get - /youtubeKeywords returns all recent songs
export let allKeywords = (req: Request, res: Response) => {

    let youtube_keywords = Keywords.find( (err: any, youtube_keywords: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(youtube_keywords);
        }    
    });

};

//Get - /youtubeKeywords/keyword returns artist by name likeness
export let keywordByKeyword = (req: Request, res: Response) => {

    let youtube_keywords = Keywords.find( {"keyword": { $regex: decodeURIComponent(req.params.keyword), $options: 'i'}} ,function(err, youtube_keywords) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(youtube_keywords);
        }
    });
};