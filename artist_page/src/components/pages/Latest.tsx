import React from 'react';
import { Redirect } from 'react-router';

import NavigationMenu from "../renders/NavigationMenu";

import ReactPlayer from 'react-player';
import Masonry from 'react-masonry-component';

import API from "./utils/API";
import API_RECENTS from "./utils/API_recents";

import './css/latest.css';

const { arrayShuffle } = require('@adriantombu/array-shuffle');

const masonryOptions = {
    columnWidth: 0,
    horizontalOrder: true,
    fitWidth: true,
    transitionDuration: '0.8s',
    stagger: '0.03s'
};

class Latest extends React.Component<{},any> {

    constructor(props: Readonly<{}>){
        super(props);
    
        this.state = {
            recentSCResults: [],
            navBarClicked : 0
        };

        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    componentDidMount() {
        this.queryRecentSC();
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

    handleLinkClick = () => {
        this.setState({
            navBarClicked: 1
          });
        console.log(this.state.navBarClicked);
        window.setTimeout(() => {
        }, 1000);
    }

    render(){

    let allRecents = [];
  
    allRecents = this.state.recentSCResults.map(
    //@ts-ignore
    (currentResult: any, index: any) =>  <ReactPlayer url= {currentResult.song_url} width= "400px" height = "400px"  />);

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
                    <h1>new this week in archived music</h1>
                </div>
            </>
        );
    }

}

export default Latest;