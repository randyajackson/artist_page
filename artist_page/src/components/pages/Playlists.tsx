import React from 'react';

import NavigationMenu from "../renders/NavigationMenu";
import Slider from "react-slick";

import API_channels from "./utils/playlists/API_channels";
import API_keywords from "./utils/playlists/API_keywords";
import API_keywords_exact from "./utils/playlists/API_keywords_exact"
import API_videos from "./utils/playlists/API_videos";

import ReactPlayer from 'react-player';

import { GoSearch } from "react-icons/go";
import { MdClear } from "react-icons/md";

import './css/playlist.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryString = require('query-string');
const { arrayShuffle } = require('@adriantombu/array-shuffle');


let channelOwnerData = new Map();

//@ts-ignore
const encode = str => encodeURIComponent(str)
    .replace(/\-/g, '%2D')
    .replace(/\_/g, '%5F')
    .replace(/\./g, '%2E')
    .replace(/\!/g, '%21')
    .replace(/\~/g, '%7E')
    .replace(/\*/g, '%2A')
    .replace(/\'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29');

class Playlists extends React.Component<{},any> {

    constructor(props: Readonly<{}>){
        super(props);
    
        this.state = {
            keywordResults: [],
            keywordPlayerResult: [],
            videoPlayerResult: [],
            channelPlayerResult: [],
            hasKeyword: false,
            searchField: '',
            playlistName: '',
            navBarClicked : 0,
            currentVideo: 0
        };

        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.handlePlaylistImageClick = this.handlePlaylistImageClick.bind(this);
        this.handleVideoProgress = this.handleVideoProgress.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClearChange = this.handleClearChange.bind(this);
    }

    componentDidMount() {

        if(channelOwnerData.size == 0){
          API_channels.get('/')
          .then( channelInfo => {
            //@ts-ignore                
            for(let i = 0; i < channelInfo.data.length; i++) {  
              //@ts-ignore
          channelOwnerData.set( channelInfo.data[i].channel_name, channelInfo.data[i]);
          };
          });
        }

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
        API_keywords_exact.get('/' + encode(query))
        .then(response => {
          
              //get video data for supplied parameter
              API_videos.get('/' + encode(query))
              .then(response2 => {                           
                
                let channelList = [];

                for(let i = 0; i < response2.data.length; i++){
                  //@ts-ignore
                   channelList.push(channelOwnerData.get(response2.data[i].video_owner));
                }

                this.setState({
                  keywordPlayerResult: response.data,
                  videoPlayerResult: response2.data,
                  channelPlayerResult: channelList
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

    handleVideoProgress(){

      if(this.state.currentVideo + 1 !== this.state.videoPlayerResult.length)
        this.setState({
          currentVideo: this.state.currentVideo + 1,
        });
      else
        this.setState({
          currentVideo: 0,
        });
      
    }

    async handleInputChange(event: any){

      await this.setState({searchField: event.target.value});

      let searchValue = this.state.searchField;
      
      if (searchValue.length > 2){

        API_keywords.get('/' + this.state.searchField)
        .then(response => {
    
          if(searchValue === "")
            response.data = arrayShuffle(response.data);
    
          this.setState({
            keywordResults: response.data,
          });
    
        })
        .catch((error) => {
          console.log(error);
        });

      }
      else{
        if (searchValue.length < 1){
          this.handleClearChange(event);
        }
      }
    }

    handleClearChange(event: any){
      this.setState({searchField: ''});
      this.queryForSearch();  
    }

    pad(n: number) {
      return (n < 10) ? ("0" + n) : n;
    }


    render(){

        if(this.state.hasKeyword){

          let todayDate : Date = new Date();
          let weekBeginDate : Date = new Date();
          weekBeginDate.setDate(weekBeginDate.getDate() - 7); 
          let videoDate : Date;
          

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

          if(this.state.keywordPlayerResult.length > 0 ){
            //@ts-ignore  
            document.body.style = 'background: rgb(' + this.state.keywordPlayerResult[0].r + ', ' + this.state.keywordPlayerResult[0].g + ', ' + this.state.keywordPlayerResult[0].b + '); transition: all ease .5s';
            
            textR = this.state.keywordPlayerResult[0].r;
            textG = this.state.keywordPlayerResult[0].g;
            textB = this.state.keywordPlayerResult[0].b;
            
            videoDate = new Date(this.state.videoPlayerResult[this.state.currentVideo].video_publish_date);

            allResultPlayers = this.state.videoPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  <ReactPlayer width = "414px" height = "174px" url = {currentPlayer.video_main_url} onEnded = {(e) => this.handleVideoProgress()} onError = {(e) => this.handleVideoProgress()} playing controls />);         
          
            allResultInfo = this.state.videoPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  [<span>{currentPlayer.video_title}</span>, <br/>,
                                                  <span><b>{"runtime : "}</b> {this.pad( (isNaN(currentPlayer.video_hours) || currentPlayer.video_hours == null ) ? 0 : currentPlayer.video_hours) + ":" + this.pad( (isNaN(currentPlayer.video_minutes) || currentPlayer.video_minutes == null ) ? 0 : currentPlayer.video_minutes) + ":" + this.pad( (isNaN(currentPlayer.video_seconds) ||  currentPlayer.video_seconds == null)? 0 : currentPlayer.video_seconds  )}</span>, <br/>,
                                                  <span><b>{"uploaded by : "}</b>  {currentPlayer.video_owner}</span>,<br/>]);
                                                              
            allResultThumbnails = this.state.videoPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  <img src= {currentPlayer.video_large_thumbnail} onClick = {(e) => this.handlePlaylistImageClick(index)}/>); 

            channelThumbnail = this.state.channelPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  (!currentPlayer) ? [] : [<a href ={currentPlayer.channel_main_url}><img className = "channelThumbnail" src = {currentPlayer.channel_picture}></img></a>, <br/>]);
            
            //@ts-ignore
            this.state.videoPlayerResult.map(
              //@ts-ignore
            (currentPlayer: any, index: any) =>  {videoKeywords[index] = currentPlayer.video_tags.map( (tag: any) => [<a href ={"/playlists?name=" + encode(tag)} className = "tagButton" style = {{backgroundColor: "rgb(" + (textR - 70) + ", " + (textG - 70) + ", " + (textB - 70) + ")", color: "rgb(" + (textR + 70) + ", " + (textG + 70) + ", " + (textB + 70) + ")"}}>{tag}</a> ])} );  
            
            
          //Everything involving state mapping happens above this line
          
              settings = {
              className: "playListSearch",
              centerMode: false,
              infinite: true,
              centerPadding: "60px",
              slidesToShow: (this.state.videoPlayerResult.length) > 2 ? 3 : 1,
              slidesToScroll: (this.state.videoPlayerResult.length) > 2 ? 3 : 1,
              speed: 750
            };

          }

          return(
              <>
              {/* the link will need to change here when live */}
              <button 
              onClick={(e) => { e.preventDefault(); window.location.href='https://intrinse.net/playlists';
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
                      {/* //@ts-ignore */}
                      <div className="flex-new-notification" style={{display: ( ( (todayDate >= videoDate!) && (videoDate! >= weekBeginDate) ) ? 'inline-block' : 'none')}}>
                          new this week
                      </div>
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
          (currentKeyword: any, index: any) =>  [<a href={"?name=" + encode(currentKeyword.keyword.toLowerCase()) } className ="keyword" onMouseEnter={ () => document.body.style = 'background: rgb(' + currentKeyword.r + ', ' + currentKeyword.g + ', ' + currentKeyword.b + '); transition: all ease .5s'} onMouseOut={ () => document.body.style = 'background: white; transition: all ease .5s'}>{currentKeyword.keyword.toLowerCase()}</a>,<br/>] );

          return(
            <>
              <NavigationMenu handleLinkClick = {this.handleLinkClick}/>
              <div className={(this.state.navBarClicked === 0)? "fadeIn" : "fadeOut"}>

                <div className="searchBarPlaylistMain">
                  <i className="searchBarSearchIcon noUserSelect"><GoSearch/></i>
                  <input 
                  type="text" 
                  name="header-search" 
                  value={this.state.searchField} 
                  onChange={this.handleInputChange} 
                  id="searchBarInput" 
                  placeholder="search by keyword">
                  </input>
                  <i className="clearSearchBarField noUserSelect" style={{display: (this.state.searchField.length > 0) ? '' : 'none'}} onClick={this.handleClearChange} ><MdClear/></i>
                </div>

                  <br/>
                  <br/>
                  {allKeywords}
                  <br/>
                  <br/>
              </div>
            </>
              );
        }
    }
}

export default Playlists;