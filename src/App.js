import { Route, Switch } from "react-router-dom";
import {Component} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import League from './components/League/League'
import Profile from './components/Profile/Profile'
import Placeholder from './components/Placeholder/Placeholder'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userData: {}
    };
  };

  sendUserInfoFromProfile = (userData) => {
    this.setState({
            userData: userData
        }, () => {
            console.log('app', this.state.userData)
        })
  }

  render() {
    return (
      <div className="App">
        <Navbar name="ACL"/>
        <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/league" component={League} />
          <Route path="/profile" render={(props) => <Placeholder {...props} sendInfo={this.sendUserInfoFromProfile}/>}/>
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}

