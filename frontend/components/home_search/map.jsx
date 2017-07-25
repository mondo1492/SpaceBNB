import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class GoogleMap extends React.Component {
  // constructor() {
  //   const defaultBounds = {
  //     northEast: {lat: 40.83628306424027, lng: -73.84941131152345},
  //     southWest: {lat: 40.624768849448365, lng: -74.02107268847658}
  //   };
  //   this.props.updateRooms(formattedBounds);
  // }
  componentDidMount() {
    const searchMap = this.refs.searchMap;
    const mapOptions = {
     center: {lat: 40.730610,
     lng: -73.935242},
     zoom: 12
    };

    this.searchMap = new google.maps.Map(searchMap, mapOptions);
    // console.log("GET BOUNDS", this.searchMap);

    // this.props.updateRooms(formattedBounds);
    // console.log("-------",this.searchMap);
    // this.props.updateRooms(this.searchMap.getBounds());

    this.MarkerManager = new MarkerManager(this.searchMap);
    this.MarkerManager.updateMarkers(this.props.rooms);

    let input = document.getElementById('searchTextFieldHome');
    //have this link to top search bar (search rooms by location)
    google.maps.event.addListener(this.searchMap, 'bounds_changed', ()=> {
      const response = this.searchMap.getBounds().toJSON();
      // console.log(this.searchMap.getBounds().toJSON());
      const formattedBounds = {
        northEast: {lat: response.north, lng: response.east},
        southWest: {lat: response.south, lng: response.west}
      };
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
      <div>
          <div className="searchMap" ref="searchMap"> Map </div>
      </div>
    );
  }
}
export default withRouter(GoogleMap);
