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
            channelPlayerResult: [],
            hasKeyword: false,
            playlistName: '',
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
            hasKeyword: true,
            playlistName: params.name
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

                //get channel data for each video
                let channelInfo: any = [];
                response2.data.forEach((element : any) => 
                    API_channels.get('/' + encodeURIComponent(element.video_owner) )
                    .then( response3 => {
                      channelInfo.push(response3.data[0]);

                      this.setState({
                        channelPlayerResult: channelInfo
                      });
                    }
                    )
                );

                this.setState({
                  keywordPlayerResult: response.data,
                  videoPlayerResult: response2.data,
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
          let channelThumbnail = [];
          //@ts-ignore
          let videoKeywords = [];
          
          //@ts-ignore
          let textR;
          //@ts-ignore
          let textG;
          //@ts-ignore
          let textB;

          if(this.state.keywordPlayerResult.length > 0){
            //@ts-ignore  
            document.body.style = 'background: rgb(' + this.state.keywordPlayerResult[0].r + ', ' + this.state.keywordPlayerResult[0].g + ', ' + this.state.keywordPlayerResult[0].b + '); transition: all ease .5s';
            
            textR = this.state.keywordPlayerResult[0].r;
            textG = this.state.keywordPlayerResult[0].g;
            textB = this.state.keywordPlayerResult[0].b;

            allResultPlayers = this.state.videoPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  <ReactPlayer width = "414px" height = "174px" url = {currentPlayer.video_main_url} playing controls />);         
          
            allResultInfo = this.state.videoPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  [<span>{currentPlayer.video_title}</span>, <br/>,
                                                  <span><b>{"runtime : "}</b> {currentPlayer.video_hours + ":" + currentPlayer.video_minutes + ":" + currentPlayer.video_seconds}</span>, <br/>,
                                                  <span><b>{"uploaded by : "}</b>  {currentPlayer.video_owner}</span>,<br/>]);
                                                              
            allResultThumbnails = this.state.videoPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  <img src= {currentPlayer.video_large_thumbnail} onClick = {(e) => this.handlePlaylistImageClick(index)}/>); 

            channelThumbnail = this.state.channelPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  [<a href ={currentPlayer.channel_main_url}><img className = "channelThumbnail" src = {currentPlayer.channel_picture}></img></a>, <br/>]);
            
            //@ts-ignore
            this.state.videoPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  {videoKeywords[index] = currentPlayer.video_tags.map( (tag: any) => [<a href ={"/playlists?name=" + encodeURIComponent(tag)} className = "tagButton" style = {{backgroundColor: "rgb(" + (textR - 70) + ", " + (textG - 70) + ", " + (textB - 70) + ")", color: "rgb(" + (textR + 70) + ", " + (textG + 70) + ", " + (textB + 70) + ")"}}>{tag}</a> ])} );  
            
            
          //Everything involving state mapping happens above this line
          
              settings = {
              className: "playListSearch",
              centerMode: true,
              infinite: true,
              centerPadding: "60px",
              slidesToShow:1,
              speed: 500
            };

          }

          return(
              <>
              {/* the link will need to change here when live */}
              <button 
              onClick={(e) => { e.preventDefault(); window.location.href='https://intrinse.net:3333/playlists';
                }} 
              id="backButton" 
              title="Back to playlists"> {'<'}
              </button>

                  <NavigationMenu handleLinkClick = {this.handleLinkClick}/>
                  <h1 className = "playlistName" style = {{color: "rgb(" + (textR - 70) + ", " + (textG - 70) + ", " + (textB - 70) + ")"}}>{this.state.playlistName}</h1>
                  <div className="nowPlayingContainer">
                    <div className="vidPlayer">
                      <Slider {...settings}>
                          {allResultThumbnails}  
                      </Slider>

                      {allResultPlayers[this.state.currentVideo]} 

                      <div className="info">
                        <div className="flex-child-thumb">
                          {channelThumbnail[this.state.currentVideo]}
                        </div>
                        <div className="flex-child-description" style = {{backgroundColor: "rgb(" + (textR - 70) + ", " + (textG - 70) + ", " + (textB - 70) + ")", color: "rgb(" + (textR + 70) + ", " + (textG + 70) + ", " + (textB + 70) + ")"}}>
                          {allResultInfo[this.state.currentVideo]} 
                        </div>
                      </div>
                      <div>
                        {/*@ts-ignore  */}
                        {videoKeywords[this.state.currentVideo]}
                      </div>  
                    </div>
                  </div>  
              <br/><br/><br/><br/><br/><br/>
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