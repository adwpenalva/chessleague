import { Route, Switch } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import League from './components/League/League'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className="App">
      <Navbar name="ACL"/>
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path="/league" component={League} />
        <Route path="/profile" component={Profile} />
    
        <Route render={() => <h2>404</h2>} />
      </Switch>
     
    </div>
  );
}

export default App;
