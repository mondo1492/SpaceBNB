import { connect } from 'react-redux';
import SessionForm from './session_form';
import { receiveErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router';

import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }, ownProps) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    formType: (ownProps.match.path === "/login") ? 'login' : 'signup'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.match.path === "/login") ? login : signup;

  return {
    processForm: user => dispatch(action(user)),
    resetErrors: () => dispatch(receiveErrors([]))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
