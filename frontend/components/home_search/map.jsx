import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class GoogleMap extends React.Component {
  componentDidMount() {
    const searchMap = this.refs.searchMap;
    const mapOptions = {
     center: {lat: 40.730610,
     lng: -73.935242},
     zoom: 12
    };
    // this.map = new google.maps.Map(map, mapOptions);
    this.searchMap = new google.maps.Map(searchMap, mapOptions);

    let input = document.getElementById('searchTextFieldHome');
    // let searchBox = new google.maps.places.SearchBox(input);
    // this.registerListeners(searchBox, searchMap);
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
        // <div className="map" ref={ map => this.mapNode = map }>

// <div className="map" ref="map"> Map </div>
