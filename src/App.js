import Login from './components/login/login.jsx'
import Todo from './components/todo/todo.jsx'
import { useSelector} from 'react-redux'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';

const App=() =>{
  const { currentUser } = useSelector(state => state.user)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/todo' component={Todo} />
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(App);
