import * as APIUtil from '../util/session__api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';



export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors
})

export const login = user => dispatch => {
  return APIUtil.postSession(user).then(user => 
    dispatch(receiveCurrentUser(user),
    errors => dispatch(receiveErrors(errors)))
  )
}

export const signUp = user => dispatch => {
  return APIUtil.postUser(user).then(user => 
    dispatch(receiveCurrentUser(user), 
    errors => dispatch(receiveErrors(errors)))
  )
}

export const logout = () => dispatch => {
  return APIUtil.destroySession.then(() => dispatch(logoutCurrentUser)
  );
};