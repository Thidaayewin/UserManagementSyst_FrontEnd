import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import UsersList from './pages/UsersList';



function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/usermangement' exact component={Overview} />
        <Route path='/userli/usermangement/users' exact component={UsersList}/>
      </Switch>
    </Router>
  );
}

export default App;
