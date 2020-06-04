import React from 'react';

import NavigationMenu from "../renders/NavigationMenu";

import API_channels from "./utils/playlists/API_channels";
import API_keywords from "./utils/playlists/API_keywords";
import API_videos from "./utils/playlists/API_videos";

import './css/playlist.css';

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
            navBarClicked : 0
        };

        this.handleLinkClick = this.handleLinkClick.bind(this);
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
          
          this.setState({
            keywordPlayerResult: response.data
          });

        })
        .catch((error) => {
          console.log(error);
        }); 
        
        //get video data for supplied parameter
        API_videos.get('/' + encodeURIComponent(query))
        .then(response => {
          
          this.setState({
            videoPlayerResult: response.data
          });

        })
        .catch((error) => {
          console.log(error);
        }); 

    }


    render(){

        if(this.state.hasKeyword){

          if(this.state.keywordPlayerResult.length > 0)
            //@ts-ignore  
            document.body.style = 'background: rgb(' + this.state.keywordPlayerResult[0].r + ', ' + this.state.keywordPlayerResult[0].g + ', ' + this.state.keywordPlayerResult[0].b + '); transition: all ease .5s';
          
          console.log(this.state.videoPlayerResult);
          return(
              <>
                  <NavigationMenu handleLinkClick = {this.handleLinkClick}/>
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