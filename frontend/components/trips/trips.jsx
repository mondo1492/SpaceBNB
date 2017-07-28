import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Trips extends React.Component {
  componentWillMount() {
    this.props.viewTrips();
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    const trips = this.props.trips ? this.props.trips : [];
    return(
      <div>
        <h2>Working</h2>
        <ul>
          {trips.map((trip, i) => (
            <li key={`trip-${i}`}>
              <h4>${ trip ? trip.total_cost : "" }</h4>
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default withRouter(Trips);
