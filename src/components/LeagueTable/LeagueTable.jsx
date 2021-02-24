import React, { Component } from 'react';
import './LeagueTable.scss';
import LeagueTableHeader from '../LeagueTableHeader/LeagueTableHeader';
import LeagueTableRows from '../LeagueTableRows/LeagueTableRows';
import api from "../../services/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKing } from '@fortawesome/free-solid-svg-icons'
import { faChessQueen } from '@fortawesome/free-solid-svg-icons'
import { faChessRook } from '@fortawesome/free-solid-svg-icons'
import { faChessKnight } from '@fortawesome/free-solid-svg-icons'
import { faChessPawn } from '@fortawesome/free-solid-svg-icons'
import { faChessBishop } from '@fortawesome/free-solid-svg-icons'


export default class LeagueTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rankingActive:  true,
            fixtureActive:  false,
            showModal:      false,
            activeRoundNumber: 1,
            selectedFixture: null,
            chessPieces: [faChessRook, faChessKnight, faChessPawn, faChessBishop],

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
                this.fixtureSelection(1)
                this.getfixtureCount();
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
    getfixtureCount = () => {
        let fixtureCount = this.props.leagueData.fixtures.map(item => item.round_id);
        fixtureCount = [...new Set(fixtureCount)];
        this.setState({
            ...this.state,
            fixtureCount: fixtureCount,
          });
    } 

    handleRoundSelection = (e) => {
        const activeRoundNumber = e.target.value;
        this.fixtureSelection(activeRoundNumber);
    };

    fixtureSelection = (roundNumber) => {
        let selectedFixture =[...this.props.leagueData.fixtures].filter(item => item.round_id === Number(roundNumber));
        this.setState({
            ...this.state,
            selectedFixture: selectedFixture
        });
    };
    
      
    render() {
        return (
            <div className="LeagueTable">
                <div className="d-flex justify-content-around w-100 tab_container">
                    <button className={this.state.rankingActive ? "btn button-primary button-primary_active tab" : "btn button-primary tab"} onClick={this.handleRankingSelect}>
                        <FontAwesomeIcon icon={faChessKing} className="icon" />Ranking
                    </button>

                    <button className={this.state.fixtureActive ? "btn button-primary button-primary_active tab" : "btn button-primary tab"} onClick={this.handleFixturesSelect}>
                        <FontAwesomeIcon icon={faChessQueen}  className="icon"/>Fixtures
                    </button>


                </div>
                <div className="d-flex justify-content-around w-100 tab_container">
                    {this.state.fixtureActive &&
                        this.state.fixtureCount.map((item,index) => (
                            <button className="btn button-primary" key={index + 10} value={item} onClick={(e) => this.handleRoundSelection(e)}>
                                <FontAwesomeIcon icon={faChessPawn} className="icon" />
                                Round {item}
                            </button>
                        ))
                    }
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
                        leagueData={this.props.leagueData}
                        ranking={this.props.leagueData.ranking}
                        fixtures={this.state.selectedFixture}
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
