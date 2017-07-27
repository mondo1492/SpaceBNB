import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class GoogleMap extends React.Component {
  componentDidMount() {
    const defaultBounds = {
      northEast: {lat: 37.873972, lng: -122.331297},
      southWest: {lat: 37.673972, lng: -122.531297}
    };
    this.props.updateRooms(defaultBounds);

    const searchMap = this.refs.searchMap;
    const mapOptions = {
      center: {lat: 37.773972,
      lng: -122.431297},
      zoom: 12,
      minZoom: 3
    };

    this.searchMap = new google.maps.Map(searchMap, mapOptions);
    this.MarkerManager = new MarkerManager(this.searchMap);

    // let input = document.getElementById('searchTextFieldHome');

    this.updateMap = () => {
      console.log("updating map?");
      const response = this.searchMap.getBounds().toJSON();
      this.formattedBounds = {
        northEast: {lat: response.north, lng: response.east},
        southWest: {lat: response.south, lng: response.west}
      };

      this.props.updateRooms(this.formattedBounds);
      console.log(this.props.rooms);
      // this.MarkerManager.updateMarkers(this.props.rooms);
    };
    let changeBed = document.getElementById('change-bed-number');
    // input.addEventListener('click', ()=> console.log("works"));
    google.maps.event.addListener(this.searchMap, 'bounds_changed', this.updateMap);


    changeBed.addEventListener('click', this.updateMap);
  }

  componentWillUpdate() {

    // console.log("WILL UPDATE");
    // this.props.updateRooms(this.props.bedParams);
    // this.MarkerManager.updateMarkers(this.props.rooms);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.rooms);
    if (nextProps.rooms !== this.props.rooms) {
      this.MarkerManager.updateMarkers(nextProps.rooms);
    }
  }

  render() {
    return (
      <div className="searchMap-container">
          <div className="searchMap" ref="searchMap"> Map </div>
      </div>
    );
  }
}
export default withRouter(GoogleMap);
