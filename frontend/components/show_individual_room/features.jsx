import React from 'react';

class Features extends React.Component{

  render() {
    const room = this.props.room;
    const guest = room.num_guests === 1 ? " guest" : " guests";
    const bedrooms = room.num_guests === 1 ? " bedroom" : " bedrooms";
    const beds = room.num_guests === 1 ? " bed" : " beds";
    return(
      <div className="show-page-features">
        <ul>
          <li>
            <img src="http://res.cloudinary.com/dluh2fsyd/image/upload/v1500947278/icon_home_mmyiu3.png"></img>
            <h4>{ room.room_type ? room.room_type : "" }</h4>
          </li>
          <li>
            <img src="http://res.cloudinary.com/dluh2fsyd/image/upload/v1500947278/icon_people_zngwhm.png"></img>
            <h4>{ room.num_guests ? room.num_guests : "" } {guest}</h4>
          </li>
          <li>
            <img src="http://res.cloudinary.com/dluh2fsyd/image/upload/v1500947278/icon_door_ibvtne.png"></img>
            <h4>{ room.bedrooms ? room.bedrooms : "" }{bedrooms}</h4>
          </li>
          <li>
            <img src="http://res.cloudinary.com/dluh2fsyd/image/upload/v1500947278/icon_bed_xd4gpd.png"></img>
            <h4>{ room.beds ? room.beds : "" }{beds}</h4>
          </li>
        </ul>
      </div>
    );
  }
}

export default Features;
