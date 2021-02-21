import { Route, Switch } from "react-router-dom";
import {Component} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import League from './components/League/League'
import Profile from './components/Profile/Profile'
import api from "./services/api";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      leagueData: null
    };
  };

  sendUserInfoFromProfile = (userData) => {
    this.setState({
            ...this.state,
            userData: userData
    });
  }

  updateLeagueData = (data) => {
        this.setState({
            ...this.state,
        leagueData: data
        })
    };
    componentDidMount() {
        Promise.all([api.getLeagueRanking(), api.getLeagueFixtures()])
          .then(result => {
              this.updateLeagueData({
                  ranking:    result[0],
                  fixtures:   result[1],
              })
          })
          .catch(error => {
              console.error(error)
          })
    }

  render() {
    return (
      <div className="App">
        <Navbar name="ACL" user={this.state.userData}/>
        <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/league"  render={(props) => 
          <League {...props} 
            updateLeagueData={this.updateLeagueData} 
            leagueData={this.state.leagueData} 
            user={this.state.userData}/>} />
          <Route path="/profile" render={(props) => 
          <Profile {...props}  
            user={this.state.userData} 
            leagueData={this.state.leagueData} 
            updateUserData={this.sendUserInfoFromProfile}/>}/>
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}

