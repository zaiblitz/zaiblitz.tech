import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Login.css';
import { API_URL } from '../../contexts/API';


const LoginFormTitle = (props) => {
    return (
        <h3>{props.heading}</h3>
    )
}

class Login extends Component {

    state = {
        username: '',
        password: '',
        hasError: false
    }

    submitFormHandler = (event) => {
        event.preventDefault();

        const params = { ...this.state };

        axios.post(API_URL + 'auth/login', params).then(response => {
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                this.setState({ hasError: false });
                this.props.history.push('/');
            }
        }).catch(error => {
            this.setState({ hasError: true })
            console.log('has error');
        });
    }

    render() {

        const errorMessage = <p>Username or password is incorrect</p>;

        /* {getToken() ? <Route path="/" component={Dashboard} /> : <Redirect from="/" to="/signin" />} */

        return (
            <div className="LoginContainer">
                <div><LoginFormTitle heading={'Login Form'} /></div>
                {this.state.hasError ? errorMessage : ""}
                <form onSubmit={this.submitFormHandler}>
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />

                    <button>Login</button>
                </form>
            </div>
        );
    }
}

LoginFormTitle.propTypes = {
    heading: PropTypes.string // check heading property if string
}

export default Login;