import { Link, Switch, Route} from 'react-router-dom'
import './App.css';
import Main from './components/Main';
import Profile from './components/Profile';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className='nav'>
          <li>
            <Link
              className="App-link"
              to="/main"
            >
              Main
            </Link>
          </li>
          <li>
            <Link
              className="App-link"
              to="profile"
            >
              Profile
            </Link>
          </li>
        </ul>

      </header>
      <Switch>
          <Route path="/main">
            <Main />
          </Route>
      
          <Route path="/profile">
            <Login>
              <Profile />
            </Login>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
