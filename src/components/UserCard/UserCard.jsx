import React, { Component } from 'react'
import './UserCard.scss';
import ActivityTracker from './../ActivityTracker/ActivityTracker'

export default class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isHovering: false,
        };
      }
    
      handleMouseHover = () => {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }
      componentDidMount() {
          console.log(this.props)
        this.getUserInfo();
      }
      getUserInfo() {
          let userRankingInfo = this.props.leagueData.ranking.find(item => item.id === this.props.userId);
          this.setState({
              userRankingInfo : userRankingInfo
          })
          console.log("userRankingInfo",userRankingInfo);
      }
    render() {
        return (
            <div className="UserCard"
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}>
                {this.props.userId}
                {
             this.state.isHovering &&
            <div className="user_card">
                <div>{this.props.userId}</div>
                <div>Wins / Draws / Losses {this.state.userRankingInfo.wins} / {this.state.userRankingInfo.draws} / {this.state.userRankingInfo.losses}</div>
                <div>Aelo {this.state.userRankingInfo.aelo} </div>
                <div>Current Season Rank {/* rank position */}</div>
                {/* If nemesis, show nemesis here */}
                                {/* <ActivityTracker leagueData={this.props.leagueData} /> */}
            </div>
        }
            </div>
        )
    }
}
