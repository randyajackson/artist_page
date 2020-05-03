import React from 'react';
import { Redirect } from 'react-router';

import instagram from './img/instagram.png';
import soundcloud from './img/soundcloud.png';
import youtube from './img/youtube.png';
import email from './img/email.png';
import logo from './img/logo.png';

import NavigationMenu from "../renders/NavigationMenu";

import './css/about.css';

const { arrayShuffle } = require('@adriantombu/array-shuffle');

class About extends React.Component<{},any> {

    constructor(props: Readonly<{}>){
        super(props);
    
    }


    render(){

        return(
            <>
                <NavigationMenu />

                <div className = "featuredTextAbout">
                <span className= "tagLineSecondAbout">
                    intrinse 
                </span>
                <span className= "tagLineFirstAbout">
                    <span> </span>
                    is a platform for finding new music
                </span>
                <br/>
                <span className= "tagLineFirstAboutBody">
                    <span> </span>
                    It began as a youtube channel in 2014 that posts full album versions of found albums.
                    2019 marked the beginning of a livestream radio that plays curated songs from new musical artists alongside a live data dashboard.
                    <br/>
                    The core focus of intrinse is <span className= "tagLineSecondAbout">discovery</span>
                    <br/>
                    The core goal of intrinse is to emulate the feeling of flipping through media at your favorite thrift store and finding a new favorite tune.
                    <br/>
                    How do we plan to do that?
                    <br/> 
                    <span className= "tagLineSecondAbout">exploration</span>
                    <br/>
                    Follow along with us as we build and grow:
                    <br/><br/><br/>
                    <a href="https://www.youtube.com/c/intrinse" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {youtube} alt = {logo}></img></a>
                    <a href="https://www.instagram.com/intrinse_" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {instagram} alt = {logo}></img></a>
                    <a href="https://soundcloud.com/intrinse" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {soundcloud} alt = {logo}></img></a>
                    <a href="mailto: intrinse.mail@gmail.com" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {email} alt = {logo}></img></a>
                    
                    
                </span>
                
                </div>
            </>
        );
    }

}

export default About;