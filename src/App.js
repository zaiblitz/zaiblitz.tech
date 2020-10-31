import { Route, NavLink, Redirect } from 'react-router-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import { getToken } from './contexts/API';
import './App.css';


//const token = localStorage.getItem("token");
//localStorage.clear();

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/signin">Sign In</NavLink></li>
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                    </ul>
                </nav>
            </header>

            {getToken() ? <Route path="/" component={Dashboard} /> : <Redirect from="/" to="/signin" />}
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Signup} />
        </div>
    );
}

export default App;
