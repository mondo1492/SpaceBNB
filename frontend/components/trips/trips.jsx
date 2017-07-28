import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Trips extends React.Component {
  componentWillMount() {
    this.props.viewTrips();
  }

  render() {
    return(
      <div className="trips">
        <h2>Working!!!!!</h2>
      </div>
    );
  }
}

export default withRouter(Trips);
