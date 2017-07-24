import merge from 'lodash/merge';
import {
  RECEIVE_LISTING
} from '../actions/listing_actions';

const defaultState = Object.freeze({
  entities: []
});

const listingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_LISTING:
      nextState = Object.assign({}, state, { entities: action.listing });
      return nextState;
    default:
      return state;
  }
};

export default listingReducer;
