import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import { API_URL } from '../../contexts/API';

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
                console.log('success');
            }
        }).catch(error => {
            this.setState({ hasError: true })
            console.log('has error');
        });
    }

    render() {

        const errorMessage = <p>Username or password is incorrect</p>;

        return (
            <div className="LoginContainer">
                <div className="test">
                    {this.state.hasError ? errorMessage : ""}
                    <form onSubmit={this.submitFormHandler}>
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />

                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />

                        <button>Login</button>
                    </form>
                </div>
            </div>
        );

    }
}

export default Login;