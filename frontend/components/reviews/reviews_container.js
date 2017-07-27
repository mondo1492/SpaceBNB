import { connect } from 'react-redux';
import values from 'lodash/values';
import RoomReviews from './reviews';
import { viewReviews, addReview } from '../../actions/review_actions';
import { withRouter } from 'react-router';

const mapStateToProps = ({ session, rooms }, ownProps) => ({
  room: rooms.entities[ownProps.match.params.id] || {},
  currentUser: session.currentUser,
  errors: rooms.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    viewReviews: roomId => dispatch(viewReviews(roomId)),
    addReview: review => dispatch(addReview(review))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomReviews));
