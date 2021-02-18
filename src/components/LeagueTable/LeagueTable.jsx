import React, { Component } from 'react';
import './LeagueTable.scss';
import LeagueTableHeader from '../LeagueTableHeader/LeagueTableHeader';
import LeagueTableRows from '../LeagueTableRows/LeagueTableRows';
import api from "../../services/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKing } from '@fortawesome/free-solid-svg-icons'
import { faChessQueen } from '@fortawesome/free-solid-svg-icons'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



export default class LeagueTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rankingActive:  true,
            fixtureActive:  false,
            ranking:        null,
            showModal:      false

        };
      };
      componentDidMount() {
          this.getData();
      }



      getData() {
          Promise.all([api.getLeagueRanking(), api.getLeagueFixtures()])
            .then(result => {
                this.props.updateLeagueData({
                    ranking:    result[0],
                    fixtures:   result[1],
                })
            })
            .catch(error => {
                console.error(error)
            })
      }

      handleRankingSelect = (e) => {
        this.setState({
            ...this.state,
            rankingActive: true,
            fixtureActive: false
          });
    };
    handleFixturesSelect = (e) => {
        this.setState({
            ...this.state,
            rankingActive: false,
            fixtureActive: true,
          });
    };
   
      
    render() {
        console.log("props", this.props);
        return (
            <div className="LeagueTable">
                <div className="d-flex justify-content-around w-100 tab_container">
                    <button className="btn button-primary" onClick={this.handleRankingSelect}>
                    <FontAwesomeIcon icon={faChessKing} className="icon" />Ranking</button>

                    <button className="btn button-primary" onClick={this.handleFixturesSelect}>
                    <FontAwesomeIcon icon={faChessQueen}  className="icon"/>Fixtures</button>
                </div>
                <div className="table_wrapper">
                <table className="table">
                  <thead>
                        <LeagueTableHeader 
                            showRaking={this.state.rankingActive}
                            showFixtures={this.state.fixtureActive}
                            />
                  </thead>
                  <tbody>
                      {this.props.leagueData && 
                        <LeagueTableRows 
                        openModal={this.openModal}
                        ranking={this.props.leagueData.ranking}
                        fixtures={this.props.leagueData.fixtures}
                        showRaking={this.state.rankingActive}
                        showFixtures={this.state.fixtureActive}
                        updateLeagueData={this.props.updateLeagueData}
                        />
                    }
                  </tbody>
                </table>
                </div>
            </div>
        )
    }
}
