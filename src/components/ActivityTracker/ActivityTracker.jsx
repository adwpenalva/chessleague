import React, { Component } from 'react'
import './ActivityTracker.scss';

export default class ActivityTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueData: null,
            trackRecord: null
        }
    };
    extractLastGames = () => {
        let leagueData = this.props.leagueData;
        let lastGamesResult = leagueData.fixtures
            .filter(item => item.black === "mrunseen" || item.white === "mrunseen")
            .filter(item => item.winner_name)
            .map(item => {
                if(item.winner_name === "mrunseen") return "W";
                else if(item.winner_name === "draw") return "D";
                else return "L";
            })
            this.setState({
                leagueData: this.props.leagueData,
                trackRecord: lastGamesResult
            })

    }
    componentDidMount() {
        this.extractLastGames();
    }


    
    render() {
        return (
            <div className="ActivityTracker">
                <h2>Track Record</h2>
                <div className="track_record">
                    {this.state.trackRecord && 
                        this.state.trackRecord.map((item, index) => 
                        <span key={index}>{item}</span>
                    )}
                </div>
            </div>
        )
    }
}
