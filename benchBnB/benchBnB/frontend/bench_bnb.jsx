import React from 'react';
import ReactDOM from 'react-dom';
import {postSession, postUser, destroySession} from './util/session__api_util'

window.postSession = postSession;
window.postUser = postUser;
window.destroySession = destroySession; 


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});