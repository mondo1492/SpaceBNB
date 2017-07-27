import React from 'react';

import MainDisplayContainer from '../main_display/main_display_container';
import GoogleMap from './map';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bed_params: { min: 0, max: 50},
      price_params: { min: 0, max: 1000000},
      guest_params: { min: 0, max: 50}
    };
  }

  updateRooms(filter) {
    const beds = this.state.bed_params;
    const prices = this.state.price_params;
    const guest = this.state.guest_params;
    filter["bed_params"] = { min: beds.min, max: beds.max};
    filter["price_params"] = { min: prices.min, max: prices.max};
    filter["guest_params"] = { min: guest.min, max: guest.max};
    this.props.getAllRooms(filter);
  }

  updateBed(field) {
    return e => {
      this.setState({
        bed_params: Object.assign(this.state.bed_params, { [field]: e.currentTarget.value})
     });
   };
  }

  updatePrice(field) {
    return e => {
      this.setState({
        price_params: Object.assign(this.state.bed_params, { [field]: e.currentTarget.value})
     });
   };
  }
  updateGuest(field) {
    return e => {
      this.setState({
        guest_params: Object.assign(this.state.bed_params, { [field]: e.currentTarget.value})
     });
   };
  }

  searchParameters() {
    return(
      <div className="search-params-container">
        <ul>
          <li>
            <h2>Number of beds</h2>
              <input
                type="number"
                onChange={this.updateBed('min')}
                placeholder="Any number of beds"
              />
          </li>
          <li>
            <h2>Number of guests allowed</h2>
            <input
              type="number"
              onChange={this.updateGuest('max')}
              placeholder="Any number of guests"
            />
          </li>
          <li>
            <h2>Max price</h2>
              <input
                type="number"
                onChange={this.updatePrice('max')}
                placeholder="Any price"
              />
          </li>
        </ul>
        <button id="change-bed-number">Update map!</button>
      </div>
    );
  }

  render() {
    console.log("Yo");
    return(
      <div>
        {this.searchParameters()}
        <div className="rooms-map-main-container">

          <MainDisplayContainer />
          <GoogleMap rooms={this.props.entities}
            updateRooms={this.updateRooms.bind(this)}
            bedParams={this.state.bed_params}/>
        </div>

      </div>

    );
  }
}

export default Search;
