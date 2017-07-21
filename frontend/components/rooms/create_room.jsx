import React from 'react';
import merge from 'lodash/merge';
import { Link, withRouter } from 'react-router-dom';

class CreateRoom extends React.Component {
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
          room_type: "",
          num_guests: "",
          bedrooms: "",
          beds: "",
          pic_url: ""
        }
      };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.currentUser);
    const room = merge({}, {room: this.state.room}, {room: {host_id: this.props.currentUser.id }});
    // this.setState({room: {host_id: this.props.currentUser}});
    this.props.createRoom(room);
  }

  update(field) {
    return e => this.setState({
      room: Object.assign(this.state.room, { [field]: e.currentTarget.value })
    });
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

  render() {
    return (
      <div className="new-room-form-container">
        <div className="new-room-form-box">
          <form className="new-room-form">
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
                <input
                  type="text"
                  value={this.state.room.prop_type}
                  onChange={this.update('prop_type')}
                  placeholder="Property Type"
                />
                <input
                  type="text"
                  value={this.state.room.room_type}
                  onChange={this.update('room_type')}
                  placeholder="Room Type"
                />
                <input
                  type="text"
                  value={this.state.room.num_guests}
                  onChange={this.update('num_guests')}
                  placeholder="Number of Guests"
                />
                <input
                  type="text"
                  value={this.state.room.bedrooms}
                  onChange={this.update('bedrooms')}
                  placeholder="Number of Bedrooms"
                />
                <input
                  type="text"
                  value={this.state.room.beds}
                  onChange={this.update('beds')}
                  placeholder="Number of Beds"
                />
                <input
                  type="text"
                  value={this.state.room.pic_url}
                  onChange={this.update('pic_url')}
                  placeholder="Pic Url"
                />
              <button onClick={this.handleSubmit}>Add Room</button>
              {this.renderErrors()}
            </form>

          </div>
      </div>
    );
  }
}

export default CreateRoom;
