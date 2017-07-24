import React from 'react';
import merge from 'lodash/merge';
import { Redirect, Route,Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
import GeoLocation from './geo_location';
// import VirtualizedSelect from 'react-virtualized-select';

import DropForm from './image_drop';

class CreateRoom extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        room: {
          title: "test",
          description: "test",
          address: "test",
          lng: "test",
          lat: "test",
          host_id: "test",
          price: "test",
          prop_type: "test",
          room_type: 'Entire place',
          num_guests: 1,
          bedrooms: 1,
          beds: 1,
          pic_url: "test"
        }
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNumbers = this.renderNumbers.bind(this);
    this.updatePicUrl = this.updatePicUrl.bind(this);
    this.updateGeoLocation = this.updateGeoLocation.bind(this);
  }

  handleSubmit(e) {
    console.log("SUBMITTTT", this.state);
    e.preventDefault();
    const room = merge(
      {}, {room: this.state.room},
      {room: {host_id: this.props.currentUser.id }}
    );
    this.props.createRoom(room).then(this.props.history.push('/'));

  }


  update(field) {
    return e => {
      this.setState({
        room: Object.assign(this.state.room, { [field]: e.currentTarget.value})
     });
   };
  }

  updateList(field) {
    return e => {
      this.setState({
        room: Object.assign(this.state.room, { [field]: e.target.value})
     });
   };
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderNumbers(val, name) {
    let count = [];
    let value = `${val}`;
      for (var i = 2; i < 31; i++) {
        count.push(
        <option
          key={i}
          onChange={this.update(val)}
          value={i}>{i} {name}</option>
        );
      }
    return count;
  }

  updatePicUrl(url) {
    this.setState({
      room: Object.assign(this.state.room, { pic_url: url})
    });
  }

  updateGeoLocation({lat, lng, address}) {
    console.log(lat, lng);
    this.setState({
      room: Object.assign(this.state.room, { lat: lat, lng: lng, address: address})
    });
    console.log("update", this.state.room);
  }

  render() {
    return (
      <div className="new-room-form-container">
        <div className="new-room-form-box">
          <div className="new-room-form">
            <div id="form-title">What kind of place are you listing?</div>
            <div id="sub-form-title">What type of property is this?</div>
              <select onChange={this.updateList('prop_type')}>
                <option value="" hidden >Select one</option>
                <option value="Apartment">Apartment</option>
                <option value="Condominium">Condominium</option>
                <option value="Guesthouse">Guesthouse</option>
                <option value="House">House</option>
                <option value="Hotel">Hotel</option>
                <option value="In-law">In-law</option>
                <option value="Guest suite">Guest suite</option>
                <option value="Townhosue">Townhosue</option>
                <option value="Vacation home">Vacation home</option>
                <option value="none" disabled>───────────────────</option>
                <option value="Boat">Boat</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Cabin">Cabin</option>
                <option value="Castle">Castle</option>
                <option value="Cave">Cave</option>
                <option value="Chalet">Chalet</option>
                <option value="Dorm">Dorm</option>
                <option value="Earth House">Earth House</option>
                <option value="Igloo">Igloo</option>
                <option value="Island">Island</option>
                <option value="Lighthouse">Lighthouse</option>
                <option value="Plane">Plane</option>
                <option value="Camper">Camper/RV</option>
                <option value="Tent">Tent</option>
                <option value="Tipi">Tipi</option>
                <option value="Train">Train</option>
                <option value="Treehouse">Treehouse</option>
                <option value="Villa">Villa</option>
                <option value="Yurt">Yurt</option>
              </select>

              <div className="padder"></div>

              <div id="sub-form-title">What will guests have?</div>
              <select onChange={this.updateList('room_type')} >
                <option value='Entire place'>Entire place</option>
                <option value='Private room'>Private room</option>
                <option value='Shared room'>Shared room</option>
              </select>

              <div className="padder"></div>

              <div id="form-title">How many guests can your place accommodate?</div>
              <select onChange={this.updateList('num_guests')}>
                <option value={1} >1 guest</option>
                {this.renderNumbers('num_guests','guests')}
              </select>

              <div className="padder"></div>

              <div id="sub-form-title">How many bedrooms can guests use?</div>
              <select onChange={this.updateList('bedrooms')} defaultValue={1}>
                <option value={0} >Studio</option>
                <option value={1}>1 bedroom</option>
                {this.renderNumbers('bedrooms','bedrooms')}
              </select>

              <div className="padder"></div>

              <div id="sub-form-title">How many beds can guests use?</div>
              <select onChange={this.updateList('beds')}>
                <option value={1}>1 bed</option>
                {this.renderNumbers('beds','beds')}
              </select>

              <div className="padder"></div>

              <div id="sub-form-title">Where’s your place located?</div>
                <input
                  id="searchTextField"
                  type="text"
                  placeholder="Address"
                />
              <div id="form-title">Show travelers what your space looks like</div>

              <DropForm className="drop-form" updateUrl={this.updatePicUrl}/>

              <div className="padder"></div>

              <div id="form-title">Edit your description</div>
              <div id="sub-form-title">Summary</div>
                <textarea
                    value={this.state.room.description}
                    onChange={this.update('description')}
                    placeholder="Description"
                  />
                <div className="padder"></div>

                <div id="form-title">Name your place</div>
                <input
                  type="text"
                  value={this.state.room.title}
                  onChange={this.update('title')}
                  placeholder="Title"
                />
              <div className="padder"></div>

              <div id="form-title">Set your daily rate</div>
                <input
                  type="text"
                  value={this.state.room.price}
                  onChange={this.update('price')}
                  placeholder="Daily rate"
                />
              <div className="padder"></div>


            {this.renderErrors()}
            </div>
            <div className="map-container">
              <GeoLocation updateGeoLocation={this.updateGeoLocation}/>
            </div>

          </div>
          <button onClick={this.handleSubmit} >create</button>
      </div>
    );
  }
}

export default withRouter(CreateRoom);
//
// <div className="padder"></div>
//   <input
//     type="text"
//     value={this.state.room.lng}
//     onChange={this.update('lng')}
//     placeholder="Longitude"
//   />
// <div className="padder"></div>
//   <input
//     type="text"
//     value={this.state.room.lat}
//     onChange={this.update('lat')}
//     placeholder="Latitude"
//   />
