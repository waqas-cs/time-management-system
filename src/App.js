import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup';
import SignupUser from './pages/signup/SignupUser';
import Dashboard from './pages/dashboard/Dashboard';
import {useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const loginData = useSelector(state => state.loginReducer)
  let token = loginData.postItems.token;
  return (
    <div className="App">
      <Router>
        <Switch>
          {token?(<>
          <Route path="/signupmanager" component={Signup} exact/>
          <Route path="/signupuser" component={SignupUser} exact/>
          <Route path="/dashboard" component={Dashboard} exact/>
        </>): (<><Route path="*" component={Login} exact /> </>)}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
