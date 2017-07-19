import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import SessionFormContainer from '../session/session_forms_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      signIn: false
    };
    console.log("props", props);
    console.log("state", this.state);
    this.onModalClose = this.onModalClose.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleClick(bool) {
    this.setState({
      modalOpen: true,
      signIn: bool
    });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  onModalClose() {
    this.setState({ modalOpen: false});
  }

  currentSessionLinks() {
    return (
      <nav className="login-signup">
        <Link to='/login'>Login!</Link>
        &nbsp;or&nbsp;
        <Link to='/signup'>Sign up!</Link>
      </nav>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.onModalClose();
  }

  newSessionLinks() {
    return (
      <nav>
          <button className="link" onClick={this.handleClick}>
            <h4>Become a Host</h4>
          </button>

          <button className="link" onClick={this.handleClick}>
            <h4>Help</h4>
          </button>

          <button className="link" onClick={this.handleClick.bind(this, false)}>
            <h4>Sign Up</h4>
          </button>

          <button className="link" onClick={this.handleClick.bind(this, true)}>
            <h4>Sign In</h4>
          </button>

      </nav>
    );
  }
  personalGreeting(currentUser, logout, resetErrors) {
    return (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={resetErrors, logout}>Log Out</button>
      </hgroup>
    );
  }

  switchType() {
    if (this.state.signIn) {
      return (
        <div>
          <h4>Don't have an account?</h4>
          <button className="highlight" onClick={this.handleClick.bind(this, false)}>Sign up</button>
        </div>
      );
    } else {
      return (
        <div>
          <h4>Already have an Spacebnb account?</h4>
          <button className="highlight" onClick={this.handleClick.bind(this, true)}>Log in</button>
        </div>
      );
    }
  }

  render() {
    const { currentUser, logout, resetErrors } = this.props;
    const leftDisplay = currentUser ? this.personalGreeting(currentUser, logout, resetErrors) : this.newSessionLinks();
    const form = (this.state.signIn) ? <SessionFormContainer formType={"login"}/> : <SessionFormContainer formType={"signup"}/>;
    const switchType = this.switchType();
  return(
      <section className="header">
        <div className="left-header-group">
          <img src="http://res.cloudinary.com/dluh2fsyd/image/upload/v1500430834/rocketLogo_ap6uiz.svg" height="40" width="40"></img>
          <h2>Search Bar</h2>
        </div>
        <div className="right-header-group">
          { leftDisplay }
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            contentLabel="auth_form">

            <button onClick={this.onModalClose}>X</button>
            {form}
            {switchType}
          </Modal>
        </div>
      </section>
    );
  }
}

export default Greeting;
//

//
// <Link className="link" onClick={this.handleClick()}>
//   <h4>Sign Up</h4>
// </Link>
//
// <Link className="link" onClick={this.handleClick()}>
//   <h4>Log In</h4>
// </Link>
