import React from 'react';

import MainDisplayContainer from '../main_display/main_display_container';
import GoogleMap from './map';

class HomeSearch extends React.Component {
  render() {
    return(
      <div className="rooms-map-main-container">
        <MainDisplayContainer />
        <GoogleMap />
      </div>
    );
  }
}

export default HomeSearch;

//make functional component
