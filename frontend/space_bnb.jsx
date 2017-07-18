import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

///testing
import { login, logout, signup } from './actions/session_actions';
///

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
//
// window.login = login;
// window.signup = signup;
// window.logout = logout;
