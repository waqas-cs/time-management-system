import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup';
import SignupUser from './pages/signup/SignupUser';
import Dashboard from './pages/dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/signupmanager" component={Signup} exact/>
          <Route path="/signupuser" component={SignupUser} exact/>
          <Route path="/dashboard" component={Dashboard} exact/>
        </Switch>
      </Router>
      {/* <Signup/> */}
    </div>
  );
}

export default App;
