import { connect } from 'react-redux';
import SessionForm from './session_form';

import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }, ownProps) => {
  console.log('session errors ----', session);
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    formType: (ownProps.location.pathname === "/login") ? 'login' : 'signup'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.location.pathname === "/login") ? login : signup;

  return {
    processForm: user => dispatch(action(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
