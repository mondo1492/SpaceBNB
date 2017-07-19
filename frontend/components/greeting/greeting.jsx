import React from 'react';
import { Link } from 'react-router-dom';

const currentSessionLinks = () => (
  <nav className="login-signup">
    <Link to='/login'>Login!</Link>
    &nbsp;or&nbsp;
    <Link to='/signup'>Sign up!</Link>
  </nav>
);

const newSessionLinks = () => (
  <nav>
      <Link to='/signup' className="link">
        <h4>Become a Host</h4>
      </Link>

      <Link to='/signup' className="link">
        <h4>Help</h4>
      </Link>

      <Link to='/signup' className="link">
        <h4>Sign Up</h4>
      </Link>

      <Link to='/login' className="link">
        <h4>Log In</h4>
      </Link>



  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => {
  //put logo in left header-group
  //eventually put search in left header group
  const leftDisplay = currentUser ? personalGreeting(currentUser, logout) : newSessionLinks();
  return(
    <section className="header">
      <div className="left-header-group">
        <img src="http://res.cloudinary.com/dluh2fsyd/image/upload/v1500430834/rocketLogo_ap6uiz.svg" height="40" width="40"></img>
        <h2>Search Bar</h2>
      </div>
      <div className="right-header-group">
        { leftDisplay }
      </div>
    </section>

  );
};

export default Greeting;
