import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RoomsReducer from './rooms_reducer';
import ListingReducer from './listing_reducer';
import ReviewsReducer from './review_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  rooms: RoomsReducer,
  listing: ListingReducer,
  reviews: ReviewsReducer
});

export default rootReducer;
