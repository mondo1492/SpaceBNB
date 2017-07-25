import React from 'react';
import { Link } from 'react-router-dom';

class MainDisplay extends React.Component {
  componentWillMount() {
    this.props.getAllRooms();
  }

  allRooms() {
    const rooms = this.props.entities ? this.props.entities : [];
    // if (rooms.length === 0) {
    //   return;
    // }
    return(
      <ul>
        {rooms.map((room, i) => (
          <li key={`room-${i}`}>
            <h4>{ room ? room.title : "" } </h4>
            <Link to={ room ? `/rooms/${room.id}` : "" }>
              <img src={ room ? `${room.pic_url}` : ""}
                height="400"
                width="400">
              </img>
            </Link>

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
