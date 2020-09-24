import React from 'react';
import { Redirect } from 'react-router';

import NavigationMenu from "../renders/NavigationMenu";

import ReactPlayer from 'react-player';
import Masonry from 'react-masonry-component';

import API from "./utils/API";
import API_RECENTS from "./utils/API_recents";
import API_RECENT_KEYWORDS from "./utils/API_recent_keywords";

import './css/latest.css';

const { arrayShuffle } = require('@adriantombu/array-shuffle');

const masonryOptions = {
    columnWidth: 0,
    horizontalOrder: true,
    fitWidth: true,
    transitionDuration: '0.8s',
    stagger: '0.03s'
};

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

class Latest extends React.Component<{},any> {

    constructor(props: Readonly<{}>){
        super(props);
    
        this.state = {
            recentSCResults: [],
            recentKeywords: [],
            navBarClicked : 0
        };

        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    componentDidMount() {
        this.queryRecentSC();
        this.queryRecentKeywords();
      }

    queryRecentSC(){
        API_RECENTS.get('/')
        .then(response => {
          response.data = arrayShuffle(response.data);
          this.setState({
            recentSCResults: response.data
          });
    
        })
        .catch((error) => {
          console.log(error);
        });  
    }

    queryRecentKeywords(){
        API_RECENT_KEYWORDS.get('/')
        .then(response => {

          this.setState({
            recentKeywords: response.data
          });
    
        })
        .catch((error) => {
          console.log(error);
        });  
    }

    handleLinkClick = () => {
        this.setState({
            navBarClicked: 1
          });
        window.setTimeout(() => {
        }, 1000);
    }

    render(){

    let allRecents = [];
    let allRecentKeywords = [];
  
    allRecents = this.state.recentSCResults.map(
    //@ts-ignore
    (currentResult: any, index: any) =>  <ReactPlayer url= {currentResult.song_url} width= "200px" height = "200px"  />);

    allRecentKeywords = this.state.recentKeywords.map(
    //@ts-ignore
    (currentKey: any, index: any) =>  <a href ={"/playlists?name=" + encode(currentKey.keyword.toLowerCase())} className = "tagButton">{currentKey.keyword}</a>  ); 

        return(
            <>
                <NavigationMenu handleLinkClick = {this.handleLinkClick}/>
                <div className={(this.state.navBarClicked === 0)? "fadeIn" : "fadeOut"}>
                    
                    <div className = "featuredText">
                        <span className= "tagLineFirst">new this week from</span>
                        <br/>
                        <span className= "tagLineSecond">featured livestream artists</span>
                    </div>
                    
                    <br/><br/><br/>
                    <Masonry
                    className={'grid-item-latest'}
                    elementType={'div'}
                    options={masonryOptions}
                    >
                        {allRecents}
                    </Masonry>

                    <div className = "featuredText">
                        <span className= "tagLineFirst">new this week in</span>
                        <br/>
                        <span className= "tagLineSecond">playlists</span>
                    </div>
                    
                    <br/>
                    <Masonry
                    className={'grid-item-latest'}
                    elementType={'div'}
                    options={masonryOptions}
                    >
                        {allRecentKeywords}
                    </Masonry>
                    <br/><br/><br/>
                </div>
            </>
        );
    }

}

export default Latest;