import { Request, Response } from 'express';
import RecentSongs from './../recents';

//Get - /recent returns all recent songs
export let allRecents = (req: Request, res: Response) => {

    let recent_songs = RecentSongs.find( (err: any, recent_songs: any) => {
        if(err) {
            res.send(err);
        } else {
            console.log(recent_songs);
            res.send(recent_songs);
        }    
    });

};

