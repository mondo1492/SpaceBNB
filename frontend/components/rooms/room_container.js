import { connect } from 'react-redux';
import CreateRoom from './create_room';
import { receiveRoomsErrors } from '../../actions/room_actions';
import { addRoom } from '../../actions/room_actions';

const mapStateToProps = ({ session, rooms }) => ({
  currentUser: session.currentUser,
  errors: rooms.errors
});

const mapDispatchToProps = dispatch => ({
  createRoom: room => dispatch(addRoom(room)),
  receiveErrors: () => dispatch(receiveRoomsErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoom);
