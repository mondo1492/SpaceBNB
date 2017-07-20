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
    this.props.resetErrors();
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.errors.length > 1) {
      this.props.resetErrors();
    }
    if (nextProps.currentUser) {
      this.onModalClose();
    }
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
            <h4>Log In</h4>
          </button>

      </nav>
    );
  }
  currentSession(currentUser, logout, resetErrors) {
    return (
      <nav>
        <button className="link" onClick={this.handleClick}>
          <h4>Become a Host</h4>
        </button>
        <button className="link" onClick={this.handleClick}>
          <h4>Help</h4>
        </button>

        <button className="header-button" onClick={resetErrors, logout}>
          <h4>Log Out</h4>
        </button>
        <button>
          <img src="http://res.cloudinary.com/dluh2fsyd/image/upload/v1500516308/users_oq566g.svg" height="30" width="30"></img>
        </button>


      </nav>
    );
  }



  switchType() {
    if (this.state.signIn) {
      return (
        <div className="switch" >
          <h4>Don't have an account?</h4>
          <input type="submit" onClick={this.handleClick.bind(this, false)} value={"Sign up"}></input>
        </div>
      );
    } else {
      return (
        <div className="switch">
          <h4>Already have an Spacebnb account?</h4>
          <input type="submit" onClick={this.handleClick.bind(this, true)} value={"Log in"}></input>
        </div>
      );
    }
  }

  render() {
    const { currentUser, logout, resetErrors } = this.props;
    const leftDisplay = currentUser ? this.currentSession(currentUser, logout, resetErrors) : this.newSessionLinks();
    const form = (this.state.signIn) ? <SessionFormContainer formType={"login"}/> : <SessionFormContainer formType={"signup"}/>;
    const switchType = this.switchType();
    return(
      <section className="header">
        <div className="left-header-group">
          <img src="http://res.cloudinary.com/dluh2fsyd/image/upload/v1500430834/rocketLogo_ap6uiz.svg" height="40" width="40"></img>
          <input type="text" name="search" placeholder="Search.."></input>
        </div>
        <div className="right-header-group">
          { leftDisplay }
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            className="modal"
            overlayClassName="modal-overlay"
            contentLabel="auth_form">

            <button className="X" onClick={this.onModalClose}>&times;</button>
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
