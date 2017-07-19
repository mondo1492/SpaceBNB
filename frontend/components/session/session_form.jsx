import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        user: {
          username: "",
          password: ""
        },
        formType: this.props.formType
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.console.log(this.state.formType);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.formType !== nextProps.formType) {
      this.props.resetErrors();
      this.setState({
        user: {
          username: "",
          password: ""
        },
        formType: nextProps.formType
      });
    }

    if (nextProps.loggedIn) {
      this.props.resetErrors();
      this.props.history.push('/');
    }

  }




  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, {user: this.state.user});
    this.props.processForm(user);
  }

  update(field) {
  return e => this.setState({
    user: Object.assign(this.state.user, { [field]: e.currentTarget.value })
  });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const loginOrSignUp = this.state.formType === 'login' ? 'Log in' : 'Sign up';
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
                <input type="text"
                  value={this.state.user.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"
                />
                <input type="password"
                  value={this.state.user.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />
              <input type="submit" value={loginOrSignUp} />
            </div>
          </form>
      </div>
    );
  }
}

export default SessionForm;

  // // Please {this.props.formType} or {this.navLink()}
  //
  // navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to="/signup">sign up instead</Link>;
  //   } else {
  //     return <Link to="/login">log in instead</Link>;
  //   }
  // }
