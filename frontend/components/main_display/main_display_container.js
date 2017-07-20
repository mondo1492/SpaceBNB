import { connect } from 'react-redux';
import MainDisplay from './main_display';
import { receiveErrors } from '../../actions/room_actions';
import { showAllRooms } from '../../actions/room_actions';

const mapStateToProps = ({ session, rooms }) => ({
  rooms: rooms,
  currentUser: session.currentUser,
  errors: rooms.errors
});

const mapDispatchToProps = dispatch => ({
  getAllRooms: () => dispatch(showAllRooms())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDisplay);
