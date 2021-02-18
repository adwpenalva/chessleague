import React, { Component } from 'react'
import './League.scss';
import api from "../../services/api";
import FontAwesome from 'react-fontawesome';
import LeagueTable from '../LeagueTable/LeagueTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChess } from '@fortawesome/free-solid-svg-icons'
export default class League extends Component {
    constructor(props) {
        super(props);
       
      };




    render() {
        console.log("this.props.leagueData", this.props.leagueData)
        return (
            <div className="League">
                <h2 className="league_title text_primary">
             <FontAwesomeIcon icon={faChess} className="animatedIcon"/>
                ACL Page
             <FontAwesomeIcon icon={faChess} className="animatedIcon"/>
                </h2>
                    <LeagueTable leagueData={this.props.leagueData} updateLeagueData={this.props.updateLeagueData}/>
            </div>
        )
    }
}
