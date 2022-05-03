import React from 'react';
import NavigationMenu from "../renders/NavigationMenu";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import API_ALL from "./utils/API_all_discogs";
import API_GENRES from "./utils/API_genre_discogs";
import API_GENRE_LIST from "./utils/API_genre_list";
import ReactTags from 'react-tag-autocomplete';
import generic_record from './img/generic_record.jpg';
import spinner_gif from './img/spinner.gif';
import './css/discogs.css';
import './css/discogs_searchbar.css';
import Masonry from 'react-masonry-component';
import { io } from "socket.io-client";


const masonryOptions = {
  columnWidth: 50,
  itemSelector: '.grid-item',
  horizontalOrder: true,
  resize: true,
  fitWidth: true,
  stagger: '.05s',
  transitionDuration: '0s',
};

    const AlbumNoArt = (props: any) => (
      
      <div className="grid-item fade-in-image">
      <a href = {props.results.link} target="_blank">
        <div className="grid-item-no-art">
          {props.results.genres.map((element:string, i:number) => { return (element && element.length !== 0) ? (i < 3) ? <><Link to={{}} onClick={() => props.onAddition(element)}>{element}</Link><br/></> : '' : ''})} <br/>{ (String(props.results.release_year).trim() !== "0") ? props.results.release_year : "" }
      </div>
      </a>
      
      {props.isNotification ? <div className="price"><p className="priceNotification">{Number(props.results.lowest_price).toFixed(2)}</p></div> : <div className="price"><p className="price">{Number(props.results.lowest_price).toFixed(2)}</p></div>}
      <div className="date"><p className="date">{props.results.created_at.substring(5,10)} {props.results.created_at.substring(11,16)}</p></div>
      </div>
          
    );

    const AlbumArt = (props: any) => (
        <div className="grid-item fade-in-image">
          <a href = {props.results.link} target="_blank">
                <img
                src = {(props.results.cover_art.length > 1) ? props.results.cover_art : "https://static.thenounproject.com/png/340719-200.png"} 
                onError= {(e) => props.onError(e)}
                alt="none"
                loading="lazy"
                width="300"
                height="300"></img>
          </a>
          {props.isNotification ? <div className="price"><p className="priceNotification">{Number(props.results.lowest_price).toFixed(2)}</p></div> : <div className="price"><p className="price">{Number(props.results.lowest_price).toFixed(2)}</p></div>}
          {/*@ts-ignore*/}
          <div className="genre"><p className="genre">{(String(props.results.release_year).trim() !== "0") ? props.results.release_year : "" } {props.results.genres.map((element:string, i:number) => { return (element && element.length !== 0) ? (i < 3) ? <><Link to={{}} onClick={() => props.onAddition(element)}>{element}</Link>{' '}</> : '' : ''})} <br/> {props.results.created_at.substring(5,10)} {props.results.created_at.substring(11,16)}</p></div>
        </div> 
      );

  class Discogs_Tracker extends React.Component<{},any> {
  reactTags: any;
  myRef: any;
  

  constructor(props: Readonly<{}>){
    super(props);
    
    this.state = {

      //Searching
      genres: [],
      tags: [],
      searchField: '',
      albumResults: [],
      lastDate: '',
      firstDate: '',
      scrollLocked: false,
      queryType: 'all',

      //Top button
      topButtonCrawl: 0,
      notificationCount: 0,
      notificationPresent: false,

      //Spinner
      loading: false,

      //Help button
      isHelpClicked:true,
      helpButtonCrawl:1,

      //Navigation bar
      navBarClicked : 0
    };

    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleClearChange = this.handleClearChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.onAddition = this.onAddition.bind(this);
    this.handleTop = this.handleTop.bind(this);
    this.reactTags = React.createRef();
    this.myRef = React.createRef();
  }

  componentDidMount() {

    const socket = io("https://intrinse.net:5566", {});
    const socketForAlbum = io("https://intrinse.net:5566/api/socket", {});

    socket.on("newAlbum", (newAlbum) => {
      const newRecord = newAlbum.map(
      (currentResult: any, index: any) =>  {
        if(currentResult.cover_art.length > 1)
          return <AlbumArt key={index} results = {currentResult} index = {index} onAddition = {this.onAddition} onError = {this.onError} isNotification = {true} />;
        else
          return <AlbumNoArt key={index} results = {currentResult} index = {index} onAddition = {this.onAddition} onError = {this.onError} isNotification = {true} />;
      });

      if (this.state.queryType === 'genre'){
        const genreSet = new Set();
        newAlbum[0].genres.forEach((x : any) => genreSet.add(x));
        this.state.tags.forEach((x : any) => genreSet.add(x.name));

        if(genreSet.size < (newAlbum[0].genres.length + this.state.tags.length))
        this.setState({
          notificationPresent: true,
          notificationCount: this.state.notificationCount + 1,
          firstDate: newAlbum[0].created_at,
          albumResults: newRecord.concat(this.state.albumResults)
        });

      }else{
        this.setState({
          notificationPresent: true,
          notificationCount: this.state.notificationCount + 1,
          firstDate: newAlbum[0].created_at,
          albumResults: newRecord.concat(this.state.albumResults)
        });
      }

    });

    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.getGenres();
    this.queryAll();

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClearChange(event: any){
    this.setState({searchField: ''});
    this.queryAll();  
  }


  handleScroll(event: any){
    if(window.scrollY < 1500)
      this.setState( {topButtonCrawl : (window.scrollY / 1500).toFixed(2)} );
    else
      this.setState( {topButtonCrawl : 1} );

    if(window.scrollY > 1500)
      this.setState( {helpButtonCrawl : 0} );
    else
      this.setState( {helpButtonCrawl : (1 - (window.scrollY / 1500)).toFixed(2)} );
      
    if(!this.state.scrollLocked && this.state.tags.length < 1 && window.innerHeight + window.pageYOffset >= document.body.offsetHeight) { 
      this.setState({scrollLocked: !this.state.scrollLocked});
      if(!this.state.searchField){
      API_ALL.get('/' + this.state.lastDate)
      .then(response => {
        this.setState({
          lastDate: response.data[response.data.length - 1].created_at,
          firstDate: response.data[0].created_at,
          queryType: 'all',
          albumResults: this.state.albumResults.concat(
            response.data.map(
            (currentResult: any, index: any) =>  {
              if(currentResult.cover_art.length > 1)
                return <AlbumArt key={index} results = {currentResult} index = {index} onAddition = {this.onAddition} onError = {this.onError} isNotification = {false} />;
              else
                return <AlbumNoArt key={index} results = {currentResult} index = {index} onAddition = {this.onAddition} onError = {this.onError} isNotification = {false} />;
            })
          ),
          scrollLocked: !this.state.scrollLocked

        });
      })
      .catch((error) => {
      });
      }
      
    }
  }

  handleTop(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.setState({notificationCount: 0, notificationPresent: false});
  }


  queryAll(){
      API_ALL.get('/')
      .then(response => {
        this.setState({
          lastDate: response.data[response.data.length - 1].created_at,
          firstDate: response.data[0].created_at,
          queryType: 'all',
          albumResults: response.data.map(
            (currentResult: any, index: any) =>  {
              if(currentResult.cover_art.length > 1)
                return <AlbumArt key={index} results = {currentResult} index = {index} onAddition = {this.onAddition} onError = {this.onError} isNotification = {false} />;
              else
                return <AlbumNoArt key={index} results = {currentResult} index = {index} onAddition = {this.onAddition} onError = {this.onError} isNotification = {false} />;
            })
        });
      })
      .catch((error) => {
      }); 
  }

  getGenres(){
    API_GENRE_LIST.get('/').then(response => {
    let genre_list = response.data.sort();
    this.setState({
      firstDate: response.data[0].created_at,
      queryType: 'genre',
      genres : genre_list.map((name:string, id:any) => ({ id, name }))
    });
  })
  .catch((error) => {
  }); 

}

  onDelete (i: any) {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);

    if(tags.length > 0){
      const genres = tags.map((x: any) => x.name);
      let query = "";

      for(let i = 0; i < genres.length; i++){
        query = query + encodeURIComponent(genres[i]);
        if(i !== (genres.length - 1))
          query = query + '&genres[]='; 
      }

      API_GENRES.get('?genres[]=' + query)
      .then(response => {
        this.setState({
          firstDate: response.data[0].created_at,
          queryType: 'genre',
          albumResults: response.data.map(
            (currentResult: any, index: any) =>  {
              if(currentResult.cover_art.length > 1)
                return <AlbumArt key={index} results = {currentResult} index = {index} onAddition = {this.onAddition} onError = {this.onError} isNotification = {false} />;
              else
                return <AlbumNoArt key={index} results = {currentResult} index = {index} onAddition = {this.onAddition} onError = {this.onError} isNotification = {false} />;

            })
        });
      })
      .catch((error) => {
      });
  }else{
    this.queryAll();
  }

    this.setState({ tags });
  }

  onError = (ev: any) => {
    ev.target.src = {generic_record};
    ev.target.onerror = null;  
  }

  onAddition (tag: any) {
    let inputTag = tag;
    if(typeof inputTag === 'string'){
      inputTag = this.state.genres[this.state.genres.findIndex((x: { name: any; }) => x.name === inputTag)];
    }

    const tags = Array.prototype.concat(this.state.tags, inputTag);
    const genres = tags.map(x => x.name);
    let query = "";

    for(let i = 0; i < genres.length; i++){
      query = query + encodeURIComponent(genres[i]);
      if(i !== (genres.length - 1))
        query = query + '&genres[]='; 
    }

    this.setState({loading: true});
    API_GENRES.get('?genres[]=' + query)
    .then(response => {
      if(response.data.length > 0){
        this.setState({
          loading: false,
          firstDate: response.data[0].created_at,
          queryType: 'genre',
          albumResults: response.data.map(
            (currentResult: any, index: any) =>  {
              if(currentResult.cover_art.length > 1)
                return <AlbumArt key={index} results = {currentResult} index = {index} onAddition = {this.onAddition} onError = {this.onError} isNotification = {false} />;
              else
                return <AlbumNoArt key={index} results = {currentResult} index = {index} onAddition = {this.onAddition} onError = {this.onError} isNotification = {false} />;
            })
        });
      }else{
        this.setState({
          loading: false,
          queryType: 'genre',
          albumResults: []
        });
      }
      

    })
    .catch((error) => {
    });

    this.setState({ tags });
    return true;
  }

  onClickHelp(){
    this.setState({ isHelpClicked: !this.state.isHelpClicked }); 
    if(this.state.isHelpClicked) 
      this.myRef.current.style.display = "block";
    else
      this.myRef.current.style.display = "none";
  }

  handleLinkClick = () => {
    this.setState({
        navBarClicked: 1
      });

    window.setTimeout(() => {
    }, 1000);
}



  render() {

    //Notifications
    const notificationPresent = this.state.notificationPresent;
    const notificationCount = this.state.notificationCount;
    let notificationSpan;

    if(notificationPresent)
      notificationSpan = <span id="badge">{notificationCount}</span>;
    else
      notificationSpan = '';

    //Loading Spinner
    const loadingSpinnerState = this.state.loading;
    let spinner;

    if(loadingSpinnerState)
      spinner = <img src={spinner_gif} style={{"width": "80px", "height": "80px", "display": "block", "marginLeft": "auto", "marginRight": "auto"}}></img>
    else
      spinner = '';
    
    //Help Button
    const helpOpacity = this.state.helpButtonCrawl;

  return (
    <>
      {
        <div>
          <NavigationMenu handleLinkClick = {this.handleLinkClick}/>

          <button 
            onClick={this.handleTop} 
            style={{opacity: this.state.topButtonCrawl}} 
            id="topButton" 
            title="Go to top"
            onScroll={this.handleScroll}>
            {notificationSpan}
            <MdKeyboardArrowUp/>
          </button>
          
          
          <button 
            onClick={this.onClickHelp.bind(this)} 
            style={{opacity: helpOpacity, right: '-20%'}} 
            className="helpVisible">
          <IconContext.Provider value={{ size: "3.2em", className: "helpVisible" }}>
            <BsQuestionCircle/>
          </IconContext.Provider>
          </button>

          <div ref={this.myRef} id="overlay" onClick={this.onClickHelp.bind(this)}>
            <div id="overlayText">
              <h1>Discogs New Arrivals</h1>
              <p>
              This tool is essentially an explore page for new additions on discogs.com. 
              Displayed are 5000 of the most recently added and purchasable albums to the platform.
              </p>
              <p>
              Any combination of genres can be used to narrow your search.
              Genre tags can also be clicked to be added to the search.
              The genre options are limited to those in the available records.
              </p>
              <p>
              The records are updated in real time and notifications on the top arrow will alert you if new records are available.
              Records added during the session will have a red outline on the price.
              </p>
              <p>
              Note when viewing a record to check "<i>All Versions of this Release</i>" as the listing may be a new pressing.
              Any bug reports or suggestions are welcome at intrinse.mail@gmail.com
              </p>
            </div>  
          </div>
            
          
        
        <ReactTags
            ref={this.reactTags}
            tags={this.state.tags}
            placeholderText="Search by genres or styles"
            suggestions={this.state.genres}
            onDelete={this.onDelete.bind(this)}
            onAddition={this.onAddition.bind(this)}
            delimiters={['Enter', 'Tab']}
            autoresize={true}
            maxSuggestionsLength={20} />

        <br/>

        {spinner}

          <br/>
        
          <Masonry
                      className={'grid-item'}
                      elementType={'div'}
                      options={masonryOptions}
          >
            {this.state.albumResults}
          </Masonry>
        
          <br/><br/><br/><br/>
        </div>
      }
    </>
    );
  }
  }

  export default Discogs_Tracker;