import { Route, NavLink } from 'react-router-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
    return (
        <div className="App">
            <header style={{display:"none"}}>
                <nav>
                    <ul>
                        <li><NavLink to="/signin">Sign In</NavLink></li>
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                    </ul>
                </nav>
            </header>

            {/* {getToken() ? <Route path="/" component={Dashboard} /> : <Redirect from="/" to="/signin" />} */}

            <Route exact path='/' component={Dashboard} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Signup} />
        </div>
    );
}

export default App;
