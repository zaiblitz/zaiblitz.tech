import React, { Component } from 'react';
import { getToken } from '../../contexts/API';
import { Redirect } from 'react-router-dom';


import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class Dashboard extends Component {

    render() {

        return (
            <div>
                {!getToken() ? <Redirect from="/" to="signin" /> : ""}
                <p>Welcome to dashboard biatch!</p>


                <Button variant="contained" color="primary">
                    Hello World
                </Button>

                <Box component="span" m={1}>
                    <Button variant="contained" color="primary">
                        Hello World
                    </Button>
                </Box>
            </div>
        )
    }
}

export default Dashboard;