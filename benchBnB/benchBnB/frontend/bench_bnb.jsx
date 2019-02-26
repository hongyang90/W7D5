import React from 'react';
import ReactDOM from 'react-dom';
import {postSession, postUser, destroySession} from './util/session__api_util'
import configureStore from './store/store';
import Root from './components/root';
import {login} from './actions/session_actions'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  ReactDOM.render(<Root store={store}/>, root);
});