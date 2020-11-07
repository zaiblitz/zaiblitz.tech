import React, { Component } from 'react';
import { getToken } from '../../contexts/API';
import { Redirect } from 'react-router-dom';

import './UserManagement.css';

class Dashboard extends Component {

    render() {

        return (
            <div>
                {!getToken() ? <Redirect from="/" to="signin" /> : ""}
                <div className="UserManagement">
                    <div className="title">User Management</div>
                </div>
            </div>
        )
    }
}

export default Dashboard;