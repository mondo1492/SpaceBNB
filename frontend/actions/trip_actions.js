export const RECEIVE_TRIP = 'RECEIVE_TRIP';
export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';
import * as APITripUtil from '../util/trips_api_util';


export const receiveTrip = trip => ({
  type: RECEIVE_TRIP,
  trip
});

export const receiveTrips = trips => ({
  type: RECEIVE_TRIPS,
  trips
});


export const viewTrips = () => dispatch => {
  return APITripUtil.showAllTrips().then(
    response => dispatch(receiveTrips(response))
  );
};

export const addTrip = trip => dispatch => {
  return APITripUtil.addTrip(trip).then(
    response => dispatch(receiveTrip(response))
  );
};
