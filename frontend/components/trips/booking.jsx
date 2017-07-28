import React from 'react';
import merge from 'lodash/merge';
import { DateRangePicker } from "react-dates";

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: null,
      startDate: null,
      booking: {
        num_guests: "",
        total_cost: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCost = this.updateCost.bind(this);
  }

  componentWillMount() {
    this.props.getAllTripsSpecific(this.props.match.params.id);


  }
  handleSubmit(e) {
    e.preventDefault();
    const booking = merge(
      {}, { booking: this.state.booking },
      { booking:
        {
          room_id: this.props.match.params.id,
          guest_id: this.props.currentUser.id,
          start_date: this.state.startDate['_d'],
          end_date: this.state.endDate['_d'],
        }
      }
    );
    this.props.addTrip(booking).then( ()=> {this.props.history.push('/trips');} );
  }

  update(field) {
    return e => {
      this.setState({
        booking: Object.assign(this.state.booking, { [field]: e.currentTarget.value})
     });
   };
  }

  updateCost(cost) {
    return e => {
      this.setState({
        booking: Object.assign(this.state.booking, { total_cost: cost})
     });
   };
  }

  showButton(displayCost) {
    return(
      <button value={displayCost} onClick={this.update('total_cost')}>Calculate Price</button>
    );

  }

  calculate(displayCost) {
    const bool = this.state.booking.num_guests && this.state.endDate && this.state.startDate;

    const show = bool ? this.showButton(displayCost) : "";
    return(
      <div>
        <h2>Number of guests</h2>
        <input
          type="text"
          value={this.state.booking.num_guests}
          onChange={this.update('num_guests')}
          placeholder="Number of Guests"
        />
        <DateRangePicker
              startDate={ this.state.startDate }
              endDate={ this.state.endDate }
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={ this.state.focusedInput }
              onFocusChange={ focusedInput => this.setState({ focusedInput }) }
          />
        {show}
      </div>

    );
  }

  book(displayCost) {
    return(
      <div>
        <h2>Your total cost is ${displayCost}</h2>
        <button onClick={this.handleSubmit}>Book This Room!</button>
      </div>

    );
  }

  render() {
    let displayCost = 0;
    if (this.state.startDate && this.state.endDate) {
      displayCost = this.state.endDate.diff(this.state.startDate, 'days');
      displayCost *= this.props.room.price;
    }
    const display = this.state.booking.total_cost ? this.book(displayCost) : this.calculate(displayCost);
    return(
      <div className="booking">




            {display}
      </div>
    );
  }
}
// "Wed Aug 30 2017 00:00:00 GMT-0700 (PDT)"].includes(day.d)
export default Booking;