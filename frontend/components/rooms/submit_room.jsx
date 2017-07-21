import React from 'react';
import merge from 'lodash/merge';
import { Redirect, Route,Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
// import VirtualizedSelect from 'react-virtualized-select';

import DropForm from './image_drop';

class SubmitRoom extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        room: {
          title: "",
          description: "",
          address: "",
          lng: "",
          lat: "",
          host_id: "",
          price: "",
          prop_type: "",
          room_type: 'Entire place',
          num_guests: 1,
          bedrooms: 1,
          beds: 1,
          pic_url: ""
        }
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNumbers = this.renderNumbers.bind(this);
  }

  handleSubmit(e) {
    console.log("SUBMITTTT", this.state);
    e.preventDefault();
    const room = merge(
      {}, {room: this.state.room},
      {room: {host_id: this.props.currentUser.id }}
    );
    this.props.createRoom(room);
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

  render() {
    return (
      <div className="new-room-form-container">
        <div className="new-room-form-box">
          <div className="new-room-form">
                <input autoFocus
                  type="text"
                  value={this.state.room.title}
                  onChange={this.update('title')}
                  placeholder="Title"
                />
                <input
                  type="text"
                  value={this.state.room.description}
                  onChange={this.update('description')}
                  placeholder="Description"
                />
                <input
                  type="text"
                  value={this.state.room.address}
                  onChange={this.update('address')}
                  placeholder="Address"
                />
                <input
                  type="text"
                  value={this.state.room.lng}
                  onChange={this.update('lng')}
                  placeholder="Longitude"
                />
                <input
                  type="text"
                  value={this.state.room.lat}
                  onChange={this.update('lat')}
                  placeholder="Latitude"
                />
                <input
                  type="text"
                  value={this.state.room.price}
                  onChange={this.update('price')}
                  placeholder="Price"
                />

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

              <select onChange={this.updateList('room_type')} >
                <option value='Entire place'>Entire place</option>
                <option value='Private room'>Private room</option>
                <option value='Shared room'>Shared room</option>
              </select>

              <select onChange={this.updateList('num_guests')}>
                <option value={1} >1 guest</option>
                {this.renderNumbers('num_guests','guests')}
              </select>

              <select onChange={this.updateList('bedrooms')} defaultValue={1}>
                <option value={0} >Studio</option>
                <option value={1}>1 bedroom</option>
                {this.renderNumbers('bedrooms','bedrooms')}
              </select>

              <select onChange={this.updateList('beds')}>
                <option value={1}>1 bed</option>
                {this.renderNumbers('beds','beds')}
              </select>

            <DropForm currentState={this.state}
              />

            <button onClick={this.handleSubmit} >create</button>
            </div>
            {this.renderErrors()}
          </div>
      </div>
    );
  }
}

export default SubmitRoom;

// <input
//   type="text"
//   value={this.state.room.pic_url}
//   onChange={this.update('pic_url')}
//   placeholder="Pic Url"
// />
