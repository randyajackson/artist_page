import { Request, Response } from 'express';
import Radio_Infos from './../radio_infos';

//Get - /radio_infos returns all recent songs
export let allRadioInfo = (req: Request, res: Response) => {

    let radio_infos = Radio_Infos.find( (err: any, radio_infos: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(radio_infos);
        }    
    });

};