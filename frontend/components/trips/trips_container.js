import { connect } from 'react-redux';
import values from 'lodash/values';
import Booking from './booking';
import { addTrip, viewTrips, getAllTripsSpecific } from '../../actions/trip_actions';
import { withRouter } from 'react-router';

const mapStateToProps = ({ session, trips }, ownProps) => {
  return({
  trips: values(trips.trips) || [],
  currentUser: session.currentUser
});};

const mapDispatchToProps = (dispatch) => {
  return {
    viewTrips: () => dispatch(viewTrips()),
    addTrip: trip => dispatch(addTrip(trip)),
    getAllTripsSpecific: (id) => dispatch(getAllTripsSpecific(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking));
