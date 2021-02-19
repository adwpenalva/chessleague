import React, { Component } from 'react'
import lichessApi from "../../services/lichessApi";
import api from "../../services/api";
import './AddGameModal.scss';
import FontAwesome from 'react-fontawesome';

export default class AddGameModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameUrl: "",
            gameInfoLoaded: false,
            confirmationMessage: null,
            errorMessage: null,
            lichessGameData: null,
            showSuccess: false,
            showModal: false
        };
      };
      handleInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
          })
    };


      openModal = (e) => {
          this.setState({
              ...this.state,
            showModal: true
          })
      }
      closeModal = (e) => {
          this.setState({
              ...this.state,
            showModal: false
          })
      }
    

    handleClick = (e) => {
        let url = this.state.gameUrl;
        const validBaseUrls = ['https://www.lichess.org/','www.lichess.org/','https://lichess.org/','lichess.org/'];
        let urlArray = url.split('/')
        let gameId = urlArray[url.split('/').length-1]
        let lichessUrl = url.slice(0, url.length - gameId.length)
        let isValid = false;
        for (let validUrl of validBaseUrls) {
            if (lichessUrl === validUrl && (gameId.length === 8 || gameId.length === 12)) {
                isValid = true;
            }  
        }
        if(isValid) {
            lichessApi.getGameData(gameId)
                .then(result => {
                    let gameFromUrlData = result.data;
                    let selectedFixtureGame = this.props.game;
                    let errorMessage = "";
                    if(gameFromUrlData.players.black.user.id !== selectedFixtureGame.black ||
                       gameFromUrlData.players.white.user.id !== selectedFixtureGame.white ) {
                           errorMessage = 
                           `The game you are trying to add is not between ${selectedFixtureGame.white}(white) and ${selectedFixtureGame.black}(black), please check the link you are submitting again, imbecil.`
                       }
                    let confirmationMessage = {
                        white: gameFromUrlData.players.white.user.id,
                        black: gameFromUrlData.players.black.user.id,
                        result: gameFromUrlData.winner,
                        date: new Date(gameFromUrlData.createdAt).getDate() + "/" + new Date(gameFromUrlData.createdAt).toLocaleString('default', { month: 'long' })
                    }
                    this.setState({
                        ...this.state,
                        lichessGameData: gameFromUrlData,
                        confirmationMessage:confirmationMessage,
                        errorMessage: errorMessage
                    })
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }

    handleSubmit = (e) => {
        api.addNewGame({fixture_id: this.props.game.id, data: this.state.lichessGameData})
            .then(result => {
                if(result.validation.correct_time_format && result.validation.new_game && result.validation.not_fulfilled && result.validation.valid_members && result.validation.within_deadline) {
                    this.props.updateLeagueData(result)
                this.setState({
                    ...this.state,
                    showSuccess: true,
                    showModal: false
                })
                setTimeout(() => {
                    this.closeSuccessMessage();
                }, 3000);
                }
            })
    }

      showSuccessMessage = (e) => {
          this.setState({
              ...this.state,
            showSuccess: true
          })
      }
      closeSuccessMessage = (e) => {
          this.setState({
              ...this.state,
            showSuccess: false
          })
      }
    
    render() {
        return (
        <React.Fragment>
            <button className="btn button-primary button-outline button-sm" value={this.props.game} 
            onClick={e => this.openModal(e)}>+ Game</button>
            {this.state.showModal &&
            <div className="overlay">
                <div className="content">
                    <h4>Add the URL matching the selected fixture</h4>
                     {this.state.errorMessage && 
                     <div>
                        <p className="error-message">{this.state.errorMessage}</p>
                        <input className="form-control" 
                         type="text" value={this.state.gameUrl} 
                         name="gameUrl"
                         onChange={this.handleInputChange} 
                         placeholder="Insert URL here..."
                         />
                         </div>}
                    {this.state.confirmationMessage ? 
                    <div>
                        <p>Please confirm that the game you want to submit match the information below</p>
                        <p>White: {this.state.confirmationMessage.white}</p>
                        <p>Black: {this.state.confirmationMessage.black}</p>
                        <p>Result: {this.state.confirmationMessage.result}</p>
                        <p>Date: {this.state.confirmationMessage.date}</p>
                    </div>
                    :
                     <input className="form-control" 
                     type="text" 
                     value={this.state.gameUrl} 
                     name="gameUrl"
                     onChange={this.handleInputChange} 
                     placeholder="Insert URL here..."
                     />
                }
                <div className="modal-footer justify-content-between">
                    <button className="btn button-primary  button-outline" onClick={e => this.closeModal(e)}>Close</button>
                    {this.state.errorMessage && this.state.confirmationMessage &&
                    <button className="btn button-primary button-outline" onClick={e => this.handleSubmit(e)} disabled>Submit Game</button>
                     }
                    {!this.state.errorMessage && this.state.confirmationMessage ? 
                    <button className="btn button-primary button-outline" onClick={e => this.handleSubmit(e)}>Submit Game</button>
                    :
                    !this.state.confirmationMessage && <button className="btn button-primary button-outline"
                     onClick={e => this.handleClick(e)}>Confirm</button>
                    }
                </div>

                </div>
            </div>
            }
            {this.state.showSuccess && 
                <div className="overlay">
                    <div className="success-container">
                        <p> boa champz! Your game was submitted successfully! </p>
                    </div>
                </div>
            }

            </React.Fragment>

        )
    }
}
