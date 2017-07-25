import React from 'react';

import MainDisplayContainer from '../main_display/main_display_container';
import GoogleMap from './map';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.props.getAllRooms();
  }
  render() {
    return(
      <div className="rooms-map-main-container">
        <MainDisplayContainer />
        <GoogleMap rooms={this.props.entities}/>
      </div>
    );
  }
}

export default Search;

//make functional component
