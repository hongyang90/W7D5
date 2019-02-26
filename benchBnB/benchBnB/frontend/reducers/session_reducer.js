import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT_CURRENT_USER} from '../actions/session_actions'


let nullState = { id: null };

const sessionReducer = (oldState = nullState , action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = { id: action.currentUser.id};
            return Object.assign(oldState, newState);

        case LOGOUT_CURRENT_USER:
            return nullState;
        default:
            return oldState;
    }
};

export default sessionReducer;