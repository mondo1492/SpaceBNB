import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserListings extends React.Component {
  constructor(props){
    super(props);
    this.state = { listing: [] };
  }

  componentWillMount() {
    this.props.getUserListings(this.props.currentUser.id);
    this.allRoomListed = this.allRoomListed.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteRoom(e.currentTarget.value).then(
      () => this.setState(
        { listing: this.props.getUserListings(this.props.currentUser.id) }
    ));
  }

  allRoomListed() {
    return(
      <ul>
        {this.props.entities.map((room, i) =>(
          <li className="listing-index-item" key={room.id}>
            <h4>{room.title}</h4>
            <h4>{room.id}</h4>
            <button
              className='delete-button'
              value={room.id}
              onClick={this.handleClick}>
              Remove!
            </button>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const displayAllRooms = this.allRoomListed();
    return(
      <div>
        <h2>Listings</h2>
        {displayAllRooms}
      </div>
    );
  }
}

export default withRouter(UserListings);
