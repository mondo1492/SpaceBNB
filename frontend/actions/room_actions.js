export const RECEIVE_ROOM = 'RECEIVE_ROOM';
export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const RECEIVE_ROOM_ERRORS = 'RECEIVE_ROOM_ERRORS';
import * as APIRoomUtil from '../util/room_api_util';


export const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  room
});

export const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});

export const receiveRoomsErrors = errors => ({
  type: RECEIVE_ROOM_ERRORS,
  errors
});

export const addRoom = room => dispatch => {
  return APIRoomUtil.addRoom(room).then(
    response => dispatch(receiveRoom(response)),
    errors => dispatch(receiveRoomsErrors(errors.responseJSON))
  );
};

export const editRoom = room => dispatch => {
  return APIRoomUtil.editRoom(room).then(
    response => dispatch(receiveRoom(response)),
    errors => dispatch(receiveRoomsErrors(errors.responseJSON))
  );
};

export const showRoom = room => dispatch => {
  return APIRoomUtil.showRoom(room).then(
    response => dispatch(receiveRoom(response)),
    errors => dispatch(receiveRoomsErrors(errors.responseJSON))
  );
};


export const showAllRooms = () => dispatch => {
  return APIRoomUtil.showAllRooms().then(
    response => dispatch(receiveRooms(response)),
    errors => dispatch(receiveRoomsErrors(errors.responseJSON))
  );
};

//write a delete room action or remove room action
export const deleteRoom = () => dispatch => {
  return APIRoomUtil.deleteRoom().then(
    () => dispatch(receiveRoom()),
    errors => dispatch(receiveRoomsErrors(errors.responseJSON))
  );
};
