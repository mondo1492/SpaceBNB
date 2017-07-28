import React from 'react';
import merge from 'lodash/merge';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: {
        start_date: "",
        end_date: "",
        num_guests: "",
        total_cost: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getAllTripsSpecific();
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = merge(
      {}, { booking: this.state.booking },
      { booking:
        {
          room_id: this.props.match.params.id,
          guest_id: this.props.currentUser.id
        }
      }
    );
    this.props.addTrip(booking);
  }

  update(field) {
    return e => {
      this.setState({
        booking: Object.assign(this.state.booking, { [field]: e.currentTarget.value})
     });
   };
  }

  // updateList(field) {
  //   return e => {
  //     this.setState({
  //       booking: Object.assign(this.state.booking, { [field]: e.target.value})
  //    });
  //  };
  // }

  render() {
    return(
      <div>
        <input
          type="text"
          value={this.state.booking.start_date}
          onChange={this.update('start_date')}
          placeholder="Start Date"
        />
        <input
          type="text"
          value={this.state.booking.end_date}
          onChange={this.update('end_date')}
          placeholder="End Date"
        />
        <input
          type="text"
          value={this.state.booking.num_guests}
          onChange={this.update('num_guests')}
          placeholder="Number of Guests"
        />
        <input
          type="text"
          value={this.state.booking.total_cost}
          onChange={this.update('total_cost')}
          placeholder="Total Cost"
        />
      <button onClick={this.handleSubmit}>Book This Room!</button>
      </div>
    );
  }
}
export default Booking;
