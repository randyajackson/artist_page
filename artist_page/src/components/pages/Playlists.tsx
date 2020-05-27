import React from 'react';

import NavigationMenu from "../renders/NavigationMenu";

import API_channels from "./utils/playlists/API_channels";
import API_keywords from "./utils/playlists/API_keywords";
import API_videos from "./utils/playlists/API_videos";

const { arrayShuffle } = require('@adriantombu/array-shuffle');

class Playlists extends React.Component<{},any> {

    constructor(props: Readonly<{}>){
        super(props);
    
        this.state = {
            keywordResults: [],
            navBarClicked : 0
        };

        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    componentDidMount() {
        this.queryAllKeywords();
      }

    handleLinkClick = () => {
        this.setState({
            navBarClicked: 1
          });

        window.setTimeout(() => {
        }, 1000);
    }

    queryAllKeywords(){
        API_keywords.get('/')
        .then(response => {
          response.data = arrayShuffle(response.data);
          console.log(response.data);
          
          this.setState({
            keywordResults: response.data
          });
    
        })
        .catch((error) => {
          console.log(error);
        });  
    }

    render(){

        let allKeywords = [];
  
        allKeywords = this.state.keywordResults.map(
        //@ts-ignore
        (currentKeyword: any, index: any) =>  <h1>{currentResult.keyword}</h1>);

        return(
            <>
                <NavigationMenu handleLinkClick = {this.handleLinkClick}/>
                {allKeywords}
            </>
            );

    }
}

export default Playlists;