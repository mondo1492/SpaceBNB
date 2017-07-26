import React from 'react';

import MainDisplayContainer from '../main_display/main_display_container';
import GoogleMap from './map';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bed_params: { min: 0, max: 50},
      price: null,
      property_type: null
    };
  }

  updateRooms(filter) {
    const {min, max} = this.state.bed_params;
    console.log("MIN", min);
    console.log("MAX", max);

    filter["bedsNum"] = { min: min, max: max};
    this.props.getAllRooms(filter);
  }

  update(field) {
    return e => {
      this.setState({
        bed_params: Object.assign(this.state.bed_params, { [field]: e.currentTarget.value})
     });
   };
  }

  searchParameters() {
    return(
      <div>
        <h2>Search Features Here</h2>
        <input
          id="change-bed-number"
          type="number"
          onChange={this.update('min')}
          placeholder="Title"
        />
      </div>
    );
  }

  render() {
    console.log("Yo");
    return(
      <div>
        <div className="rooms-map-main-container">
          {this.searchParameters()}
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
