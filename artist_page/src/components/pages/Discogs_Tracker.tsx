import React from 'react';
import update from 'react-addons-update';
import { GoSearch } from "react-icons/go";
import { MdClear } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import API_ALL from "./utils/API_all_discogs";
import API_GENRE from "./utils/API_genre_discogs";

import NavigationMenu from "../renders/NavigationMenu";

import './css/discogs.css';

import Masonry from 'react-masonry-component';
import { unstable_batchedUpdates } from 'react-dom';
import { checkPropTypes } from 'prop-types';

import ReactPlayer from 'react-player';

const masonryOptions = {
  columnWidth: 50,
  horizontalOrder: true,
  fitWidth: true,
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

    const AlbumNoArt = (props: any) => (
      
      <div className="grid-item">
      <a href = {props.results.link} target="_blank" style= {{"text-decoration":"none"}}>
        <div className="grid-item-no-art">
          {props.results.genres.concat(props.results.styles).splice(0, 3).join("\n")} <br/> { (props.results.release_year !== "0") ? props.results.release_year : "" }
      </div>
      </a>
      <div className="price"><p className="price">{Number(props.results.lowest_price).toFixed(2)}</p></div>
      <div className="date"><p className="date">{props.results.created_at.substring(5,10)} {props.results.created_at.substring(11,16)}</p></div>
      </div>
          
    );

    const AlbumArt = (props: any) => (
        <div className="grid-item">
          <a href = {props.results.link} target="_blank">
                <img
                src = {(props.results.cover_art.length > 1) ? props.results.cover_art : "https://static.thenounproject.com/png/340719-200.png"} 
                alt="none"></img>
          </a>
          <div className="price"><p className="price">{Number(props.results.lowest_price).toFixed(2)}</p></div>
          <div className="genre"><p className="genre">{(props.results.release_year !== "0") ? props.results.release_year : "" } {props.results.genres.concat(props.results.styles).splice(0, 3).join("\/")} <br/> {props.results.created_at.substring(5,10)} {props.results.created_at.substring(11,16)}</p></div>
          {/* <div className="date"><p className="date">{props.results.created_at.substring(5,10)} {props.results.created_at.substring(11,16)}</p></div> */}
        </div> 
      );

  class Discogs_Tracker extends React.Component<{},any> {

  constructor(props: Readonly<{}>){
    super(props);

    this.state = {
      searchField: '',
      albumResults: [],
      topButtonCrawl: 0,
      navBarClicked : 0

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClearChange = this.handleClearChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.queryAll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

  }

  handleClearChange(event: any){
    this.setState({searchField: ''});
    this.queryAll();  
  }

  async handleInputChange(event: any){

    await this.setState({searchField: event.target.value});
    let searchValue = this.state.searchField;

    API_GENRE.get('/' + encode(this.state.searchField))
    .then(response => {
      this.setState({
        albumResults: response.data.splice(0,50)
      });

    })
    .catch((error) => {
      console.log(error);
    });

  }

  handleScroll(event: any){

    if(window.scrollY < 1500)
      this.setState( {topButtonCrawl : (window.scrollY / 1500).toFixed(2)} );
    else
      this.setState( {topButtonCrawl : 1} );
  }

  handleTop(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }

  queryAll(){
      API_ALL.get('/')
      .then(response => {
        this.setState({
          albumResults: response.data.splice(0,51)
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

  render() {

  let allProps = [];
  allProps = this.state.albumResults.map(
  (currentResult: any, index: any) =>  {
    if(currentResult.cover_art.length > 1)
      return <AlbumArt results = {currentResult} index = {index} />;
    else
      return <AlbumNoArt results = {currentResult} index = {index} />;
  });

  return (
    <>
      {/* <button 
        onClick={this.handleTop} 
        style={{opacity: this.state.topButtonCrawl}} 
        id="topButton" 
        title="Go to top"
        onScroll={this.handleScroll}><MdKeyboardArrowUp/></button>

      <div className="searchBarMain">
          <i className="searchBarSearchIcon noUserSelect"><GoSearch/></i>
          <input 
          type="text" 
          name="header-search" 
          value={this.state.searchField} 
          onChange={this.handleInputChange} 
          id="searchBarInput" 
          placeholder="search by name">
          </input>
          <i className="clearSearchBarField noUserSelect" style={{display: (this.state.searchField.length > 0) ? '' : 'none'}} onClick={this.handleClearChange} ><MdClear/></i>
      </div> */}

      <Masonry
                  className={'grid-item'}
                  elementType={'div'}
                  options={masonryOptions}
      >
        {allProps}
      </Masonry>

    {/* <NavigationMenu handleLinkClick = {this.handleLinkClick}/>
    <div className={(this.state.navBarClicked === 0)? "fadeIn" : "fadeOut"}>
        
        

      <br /><br />

        
          
      
      <br/>
      <br/>
      
      
    </div> */}
    </>
    );
  }
  }

  export default Discogs_Tracker;