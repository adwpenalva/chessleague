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

    handleRoundSelection = (e) => {
        const activeRoundNumber = e.target.value;
        this.fixtureSelection(activeRoundNumber);
    };

    fixtureSelection = (roundNumber) => {
        console.log("roundNumber", Number(roundNumber))
        let selectedFixture =[...this.props.leagueData.fixtures].filter(item => item.round_id === Number(roundNumber));
        this.setState({
            ...this.state,
            selectedFixture: selectedFixture
        });
    };
   
      
    render() {
        console.log("rankingActive", this.state.rankingActive);
        console.log("fixtureActive", this.state.fixtureActive);
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
                    {this.state.fixtureActive &&
                    <div className="d-flex justify-content-around w-100 tab_container">
                        <button className="btn button-primary" value="1" onClick={(e) => this.handleRoundSelection(e)}>
                            <FontAwesomeIcon icon={faChessPawn} className="icon" />Round One
                        </button>
                        
                        <button className="btn button-primary" value="2" onClick={(e) => this.handleRoundSelection(e)}>
                            <FontAwesomeIcon icon={faChessPawn}  className="icon"/>Round Two
                        </button>

                    </div>
                    }
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
