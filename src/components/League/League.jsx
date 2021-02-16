import React, { Component } from 'react'
import './League.scss';
import api from "../../services/api";
import LeagueTable from '../LeagueTable/LeagueTable'
export default class League extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    //   };





    render() {
        return (
            <div className="League">
                <h2 className="primary-text">ACL Page</h2>
                    <LeagueTable />
            </div>
        )
    }
}
