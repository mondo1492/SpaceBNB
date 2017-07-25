import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './nav_links';
import Title from './title';
import Features from './features';
import Description from './description';
import MoreDetails from './more_details';

class ShowRoom extends React.Component {
  componentWillMount() {
    this.props.showRoom(this.props.match.params.id);
  }

  bannerPicture() {
    const bannerPictureStyle = {
      height: "100%",
      width: "100%",
      backgroundImage: `url(${this.props.room.pic_url})`
    };
    return(
      <div className="show-page-picture"
        style={bannerPictureStyle}
      />
    );
  }

  render(){
    const room = this.props.room;
    return(
      <div>
        {this.bannerPicture()}
        <div className="show-room-container">
          <div className="show-main-content">
            <NavLinks url={`#/rooms/${this.props.match.params.id}`}/>
            <Title room={room}  />
            <Features room={room} />
            <Description room={room} />
            <MoreDetails room={room} />
            <a href="reviews"></a>
            <div className="show-page-reviews">
              <h3>Reviews</h3>
            </div>
            <a href="#host"></a>
            <div className="show-page-host">
              <h3>Host info</h3>
            </div>
            <a name="location"></a>
            <div className="show-page-location">
              <h3>Location</h3>
            </div>
          </div>
          <div className="floating-booking">

          </div>
          <div className="bottom"></div>
        </div>
      </div>
    );
  }
}

export default ShowRoom;
