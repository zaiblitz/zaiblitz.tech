import { Route, NavLink } from 'react-router-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import UserManagement from './components/UserManagement/UserManagement';
import './App.css';

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

      {/* {getToken() ? <Route path="/" component={UserManagement} /> : <Redirect from="/" to="/signin" />} */}

      <Route exact path='/' component={UserManagement} />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  );
}

export default App;
