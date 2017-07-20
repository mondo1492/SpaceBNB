import merge from 'lodash/merge';
import {
  RECEIVE_ROOM,
  RECEIVE_ERRORS
} from '../actions/room_actions';

const defaultState = Object.freeze({
  entities: null,
  errors: []
});

const roomReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_ROOM:
      let entities = action.entities;
      nextState = merge({}, defaultState, { entities });
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
