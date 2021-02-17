import React, { Component } from 'react';
import './LeagueTable.scss';
import LeagueTableHeader from '../LeagueTableHeader/LeagueTableHeader';
import LeagueTableRows from '../LeagueTableRows/LeagueTableRows';
import api from "../../services/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default class LeagueTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rankingActive:  true,
            fixtureActive:  false,
            ranking:        null,
            dataLoaded:     false,
            showModal:      false

        };
      };
      componentDidMount() {
          this.getData();
      }


      getData() {
          Promise.all([api.getLeagueRanking(), api.getLeagueFixtures()])
            .then(result => {
                this.setState({
                    ...this.state,
                    ranking:    result[0],
                    fixtures:   result[1],
                    dataLoaded: true
                });
                console.log("data loaded", this.state)
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
        return (
            <div className="LeagueTable">
                <div className="d-flex justify-content-around w-100 pb-3">
                    <button className="btn primary-btn" onClick={this.handleRankingSelect}>
              Ranking</button>
                    <button className="btn primary-btn" onClick={this.handleFixturesSelect}> 
                 Fixtures</button>
                </div>
                <table className="table">
                  <thead>
                        <LeagueTableHeader 
                            showRaking={this.state.rankingActive}
                            showFixtures={this.state.fixtureActive}
                            />
                  </thead>
                  <tbody>
                      {this.state.dataLoaded && 
                        <LeagueTableRows 
                        openModal={this.openModal}
                        ranking={this.state.ranking}
                        fixtures={this.state.fixtures}
                        showRaking={this.state.rankingActive}
                        showFixtures={this.state.fixtureActive}
                        />
                    }
                  </tbody>
                </table>
            
            </div>
        )
    }
}
