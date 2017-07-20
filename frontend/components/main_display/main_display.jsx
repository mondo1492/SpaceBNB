import React from 'react';
import { Link } from 'react-router-dom';

class MainDisplay extends React.Component {

  componentWillMount() {
    this.props.getAllRooms();
  }

  allRooms() {
    return(
      <ul>
        {this.props.rooms.entities.map((room, i) => (
          <li key={`room-${i}`}>
            <h2>Room Title is {room.title} </h2>

          </li>
        ))}
      </ul>
    );
  }

  render(){
    // const x = this.allRooms();
    // console.log(x);
    console.log(this.props);
    const y = this.allRooms();
    console.log(y);
    return(
      <div>
        <h1>Working</h1>
        <h2>Current user is </h2>
        <h2>All rooms are is  </h2>
        {y}
      </div>
    );
  }
}

export default MainDisplay;
