import { Request, Response } from 'express';
import Keywords from './../keywords';

//Get - /youtubeKeywords returns all recent songs
export let allKeywords = (req: Request, res: Response) => {

    let youtube_keywords = Keywords.find( (err: any, youtube_keywords: any) => {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log("good");
            console.log(youtube_keywords);
            res.send(youtube_keywords);
        }    
    });

};