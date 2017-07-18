import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

///testing
import { login, logout, signup } from './actions/session_actions';
///

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

// const store = configureStore();
// window.store = store;
// window.dispatch = store.dispatch;
// window.getState = store.getState;
//
// window.login = login;
// window.signup = signup;
// window.logout = logout;
