import merge from 'lodash/merge';
import {
  RECEIVE_TRIPS,
  RECEIVE_TRIPSS
} from '../actions/trips_actions';

const defaultState = Object.freeze({
  trips: {}
});

const tripReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_TRIPSS:
      nextState = Object.assign({}, state, { trips: action.trips });
      return nextState;
    case RECEIVE_TRIPS:
      nextState = Object.assign({}, state);
      nextState.trips[action.trip.id] = action.trip;
      return nextState;
    default:
      return state;
  }
};

export default tripReducer;
