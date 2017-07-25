import { connect } from 'react-redux';
import Search from './search';


// const mapStateToProps = ({ session }) => ({
//   currentUser: session.currentUser,
//   errors: session.errors
// });
//
// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout()),
//   resetErrors: () => dispatch(receiveErrors([]))
// });

export default connect(
  null,
  null
)(Search);
