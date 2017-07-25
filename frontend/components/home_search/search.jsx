import React from 'react';

import MainDisplayContainer from '../main_display/main_display_container';
import GoogleMap from './map';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.props.getAllRooms();
    this.updateRooms = this.updateRooms.bind(this);
  }

  updateRooms(filter) {
    this.props.getAllRooms(filter);
  }

  render() {
    return(
      <div className="rooms-map-main-container">
        <MainDisplayContainer />
        <GoogleMap rooms={this.props.entities} updateRooms={this.updateRooms}/>
      </div>
    );
  }
}

export default Search;

//make functional component
