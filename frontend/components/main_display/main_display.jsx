import React from 'react';
import { Link } from 'react-router-dom';

class MainDisplay extends React.Component {
  componentWillMount() {
    this.props.getAllRooms();
  }

  allRooms() {
    console.log(this.props);
    return(
      <ul>
        {this.props.entities.map((room, i) => (

          <li key={`room-${i}`}>
            <h4>Room Title is {room.title} </h4>
          </li>
        ))}
      </ul>
    );
  }

  render(){
    const displayAllRooms = this.allRooms();
    return(
      <div>
        <h2>Top Rated Rooms</h2>
        {displayAllRooms}
      </div>
    );
  }
}

export default MainDisplay;
