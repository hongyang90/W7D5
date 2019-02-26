import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user); 
    }


    update(field) {
        return e => {
            this.setState({[field]: e.target.value});
        };
    }

    render () {

     return (
         <div>
             <h1>{this.props.formType}</h1>
             <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Username
                <input type="text"  onChange={this.update('username')}/>
                </label>
                <label htmlFor="">Password
                    <input type="password" onChange={this.update('password')}/>
                </label>
                <input type="submit" value='submit'/>
             </form>
             <Link to={`/${this.props.linkType}`} >{this.props.linkType}</Link>
         </div>
     )
    }
};

export default SessionForm;