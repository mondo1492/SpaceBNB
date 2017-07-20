import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RoomsReducer from './rooms_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  rooms: RoomsReducer
});

export default rootReducer;
