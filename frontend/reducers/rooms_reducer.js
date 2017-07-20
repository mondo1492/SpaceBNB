import merge from 'lodash/merge';
import {
  RECEIVE_ROOMS,
  RECEIVE_ERRORS
} from '../actions/room_actions';

const defaultState = Object.freeze({
  entities: [],
  errors: []
});

const roomReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_ROOMS:
      let entities = action.rooms;
      nextState = merge({}, state, { entities });
      return nextState;
    case RECEIVE_ERRORS:
      let errors = action.errors;
      nextState = merge({}, { entities: state.entities }, { errors });
      return nextState;
    default:
      return state;
  }
};

export default roomReducer;
