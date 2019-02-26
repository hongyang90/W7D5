import { connect } from "react-redux";
import SessionForm from './session_form';
import {signUp} from '../actions/session_actions';

const msp = (state, ownProps) => ({
    errors: state.errors,
    formType: 'signup',
    linkType: 'login'
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(signUp(user))
});

export default connect(msp,mdp)(SessionForm);