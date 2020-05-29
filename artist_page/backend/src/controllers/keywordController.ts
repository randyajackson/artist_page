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