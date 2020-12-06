import { Route, NavLink, Redirect } from 'react-router-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Players from './components/Admin/Players/Players';
import GameAPI from './components/Admin/GameAPI/GameAPI';
import SystemFeatures from './components/Admin/SystemFeatures/SystemFeatures';

import { getToken } from './contexts/API';
import './App.scss';

function App() {

  return (
    <div className="App">
      <header style={{ display: "none" }}>
        <nav>
          <ul>
            <li><NavLink to="/signin">Sign In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </ul>
        </nav>
      </header>

      {
        getToken() ? null :
        <Redirect from="/" to="/signin" />
      }

      <Route path="/signin" component={Login} />
      <Route path="/signup" component={Signup} />

      <Route exact path="/" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/players" component={Players} />
      <Route path="/game-api" component={GameAPI} />
      <Route path="/system-features" component={SystemFeatures} />

    </div>
  );
}

export default App;
