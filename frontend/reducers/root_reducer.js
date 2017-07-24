import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RoomsReducer from './rooms_reducer';
import ListingReducer from './listing_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  rooms: RoomsReducer,
  listing: ListingReducer
});

export default rootReducer;
