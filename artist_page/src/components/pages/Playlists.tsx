import React from 'react';

import NavigationMenu from "../renders/NavigationMenu";
import Slider from "react-slick";

import API_channels from "./utils/playlists/API_channels";
import API_keywords from "./utils/playlists/API_keywords";
import API_videos from "./utils/playlists/API_videos";

import ReactPlayer from 'react-player';

import './css/playlist.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryString = require('query-string');
const { arrayShuffle } = require('@adriantombu/array-shuffle');

class Playlists extends React.Component<{},any> {

    constructor(props: Readonly<{}>){
        super(props);
    
        this.state = {
            keywordResults: [],
            keywordPlayerResult: [],
            videoPlayerResult: [],
            hasKeyword: false,
            navBarClicked : 0,
            currentVideo: 0
        };

        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.handlePlaylistImageClick = this.handlePlaylistImageClick.bind(this);
    }

    componentDidMount() {

        const params = queryString.parse(window.location.search);
        
        //search view vs player view
        if(params.name){
          this.queryForPlayer(params.name);

          this.setState({
            hasKeyword: true
          });
        }  
        else{
          this.queryForSearch();

          this.setState({
            hasKeyword: false
          });
        }
      }

    handleLinkClick = () => {
        this.setState({
            navBarClicked: 1
          });

        window.setTimeout(() => {
        }, 1000);
    }

    handlePlaylistImageClick = (index: number) => {
      this.setState({
        currentVideo: index
        });
    }

    queryForSearch(){
        API_keywords.get('/')
        .then(response => {
          response.data = arrayShuffle(response.data);
          
          this.setState({
            keywordResults: response.data
          });
          
        })
        .catch((error) => {
          console.log(error);
        });  
    }

    queryForPlayer(query: string){
        //get keyword data for supplied parameter
        API_keywords.get('/' + encodeURIComponent(query))
        .then(response => {
          
              //get video data for supplied parameter
              API_videos.get('/' + encodeURIComponent(query))
              .then(response2 => {
                
                this.setState({
                  keywordPlayerResult: response.data,
                  videoPlayerResult: response2.data
                });

              })
              .catch((error) => {
                console.log(error);
              }); 

        })
        .catch((error) => {
          console.log(error);
        }); 
        
    }


    render(){

        if(this.state.hasKeyword){

          
          let settings;
          let allResultPlayers = [];
          let allResultInfo = [];
          let allResultThumbnails = [];

          if(this.state.keywordPlayerResult.length > 0){
            //@ts-ignore  
            document.body.style = 'background: rgb(' + this.state.keywordPlayerResult[0].r + ', ' + this.state.keywordPlayerResult[0].g + ', ' + this.state.keywordPlayerResult[0].b + '); transition: all ease .5s';
            
            allResultPlayers = this.state.videoPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  <ReactPlayer url = {currentPlayer.video_main_url} playing controls />);         
          
            allResultInfo = this.state.videoPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  [<span>{"Uploaded By: " + currentPlayer.video_owner}</span>, <br/>,
                                                  <span>{currentPlayer.video_title}</span>, <br/>,]);
                                                  
                                                  //<h1>{currentPlayer.video_tags}</h1>, <br/>,
                                                  //<h1>{currentPlayer.video_description}</h1>, <br/>]);     
            
            allResultThumbnails = this.state.videoPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  <img src= {currentPlayer.video_large_thumbnail} onClick = {(e) => this.handlePlaylistImageClick(index)}/>);                                      
          //Everything involving state mapping happens above this line
          
              settings = {
              className: "center",
              centerMode: true,
              infinite: true,
              centerPadding: "60px",
              slidesToShow:3,
              speed: 500
            };

          }

          return(
              <>
                  <NavigationMenu handleLinkClick = {this.handleLinkClick}/>
                  
                  <div className="nowPlayingContainer">
                    <div className="vidPlayer">
                    {allResultPlayers[this.state.currentVideo]} 
                    {allResultInfo[this.state.currentVideo]}  
                    <Slider {...settings}>
                        {allResultThumbnails}  
                    </Slider>
                    </div>

                    <div className="playListSearch">
                      
                    </div>  
                     
                  </div>
              </>
            );  
        }
        else{

          let allKeywords = [];
    
          allKeywords = this.state.keywordResults.map(
          //@ts-ignore
          (currentKeyword: any, index: any) =>  [<a href={"?name=" + encodeURIComponent(currentKeyword.keyword.toLowerCase()) } className ="keyword" onMouseEnter={ () => document.body.style = 'background: rgb(' + currentKeyword.r + ', ' + currentKeyword.g + ', ' + currentKeyword.b + '); transition: all ease .5s'} onMouseOut={ () => document.body.style = 'background: white; transition: all ease .5s'}>{currentKeyword.keyword.toLowerCase()}</a>,<br/>] );

          return(
            <>
              <NavigationMenu handleLinkClick = {this.handleLinkClick}/>
              <div className={(this.state.navBarClicked === 0)? "fadeIn" : "fadeOut"}>
                  {allKeywords}
              </div>
            </>
              );
        }
    }
}

export default Playlists;