import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
  } from '../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      nextState = merge({}, state, { currentUser });
      return nextState;
    case RECEIVE_ERRORS:
      let errors = action.errors;
      nextState = merge({}, state, { errors });
      return nextState;
    default:
      return state;
  }
};

export default sessionReducer;