export const RECEIVE_ROOM = 'RECEIVE_ROOM';
export const RECEIVE_ROOMS = 'RECEIVE_ROOM';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as APIRoomUtil from '../util/room_api_util';


export const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  room
});

export const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const addRoom = room => dispatch => {
  return APIRoomUtil.addRoom(room).then(
    response => dispatch(receiveRoom(response)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const editRoom = room => dispatch => {
  return APIRoomUtil.editRoom(room).then(
    response => dispatch(receiveRoom(response)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const showRoom = () => dispatch => {
  return APIRoomUtil.showRoom().then(
    response => dispatch(receiveRoom(null)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};


export const showAllRooms = () => dispatch => {
  return APIRoomUtil.showAllRooms().then(
    response => dispatch(receiveRooms(response)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteRoom = () => dispatch => {
  return APIRoomUtil.deleteRoom().then(
    () => dispatch(receiveRoom(null)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
