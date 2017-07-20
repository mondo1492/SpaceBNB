import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RoomReducer from './session_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  room: RoomReducer
});

export default rootReducer;
