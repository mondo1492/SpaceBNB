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
    console.log("here");
    this.props.updateRooms(defaultBounds);

    const searchMap = this.refs.searchMap;
    const mapOptions = {
      center: {lat: 37.773972,
      lng: -122.431297},
      zoom: 1,
      minZoom: 3
    };

    this.searchMap = new google.maps.Map(searchMap, mapOptions);
    // console.log("GET BOUNDS", this.searchMap);

    // this.props.updateRooms(formattedBounds);
    // console.log("-------",this.searchMap);
    // this.props.updateRooms(this.searchMap.getBounds());

    this.MarkerManager = new MarkerManager(this.searchMap);
    console.log(this.searchMap.gm_bindings_);
    let input = document.getElementById('searchTextFieldHome');
    //have this link to top search bar (search rooms by location)
    google.maps.event.addListener(this.searchMap, 'bounds_changed', ()=> {
      const response = this.searchMap.getBounds().toJSON();
      // console.log(this.searchMap.getBounds().toJSON());
      const formattedBounds = {
        northEast: {lat: response.north, lng: response.east},
        southWest: {lat: response.south, lng: response.west}
      };
      console.log("here2");
      this.props.updateRooms(formattedBounds);
    });
  }
  //
  componentWillUpdate() {
    this.MarkerManager.updateMarkers(this.props.rooms);
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position)=>{
      return {lat: position.coords.latitude, lng: position.coords.longitude};
    });
  } ///set state with currentLocation?

  // registerListeners(searchBox, searchMap){
  //   let self = this;
  //
  //   searchBox.addListener('places_changed', function() {
  //     // var latLon = google.maps.LatLngBounds();
  //     var place = searchBox.getPlaces()[0];
  //     const long = place.geometry.viewport["b"]["b"];
  //     const latt = place.geometry.viewport["f"]["b"];
  //     var pos = {lat: latt, lng: long};
  //     const mapOptions = {
  //       center: pos, // this is area 51
  //       zoom: 14
  //     };
  //     const mapRerender = new google.maps.Map(searchMap, mapOptions);
  //     self.props.updateGeoLocation({
  //       lat: place.geometry.viewport["f"]["b"],
  //       lng: place.geometry.viewport["b"]["b"],
  //       address: place.formatted_address});
  //       var marker = new google.maps.Marker({
  //         position: pos,
  //         map: mapRerender,
  //       });
  //       self.map.setCenter(pos, 14);
  //   });
  // }
  render() {
    return (
      <div className="searchMap-container">
          <div className="searchMap" ref="searchMap"> Map </div>
      </div>
    );
  }
}
export default withRouter(GoogleMap);
