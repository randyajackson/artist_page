import { Request, Response } from 'express';
import Keywords from './../keywords';

//Get - /recent returns all recent songs
export let allKeywords = (req: Request, res: Response) => {

    let youtubeKeywords = Keywords.find( (err: any, youtubeKeywords: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(youtubeKeywords);
        }    
    });

};