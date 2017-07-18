import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

///testing
import { login, logout, signup } from './util/session_api_util';
///

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to SpaceBnB</h1>, root);
});
