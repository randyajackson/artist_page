import { Request, Response } from 'express';
import Recent_Keywords from './../recent_keywords';

//Get - /youtubeRecentKeywords returns all recent songs
export let allKeywords = (req: Request, res: Response) => {

    let recent_keywords = Recent_Keywords.find( (err: any, recent_keywords: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(recent_keywords);
        }    
    });

};