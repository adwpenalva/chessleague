import React, { Component } from 'react'
import api from "../../services/api";
import './AddGameModal.scss';
import FontAwesome from 'react-fontawesome';

export default class AddGameModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameUrl: "",
            gameInfoLoaded: false,
            confirmationMessage: null
        };
      };
      handleInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
          })
    };
     closeicon = () => (
        <FontAwesome
        name="times"
        onClick={e => this.closeModal()}
        style={{
          color: '#000000',
          padding: '10px',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          border: 0,
          position: 'absolute',
          top: '0.3rem',
          right: '0.5rem',
        }}
        />
      );

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
            api.getGameData(gameId)
                .then(result => {
                    console.log("gameId", gameId)
                    console.log("api result =>", result)
                    let confirmationMessage = {
                        white: result.players.white.user.id,
                        black: result.players.black.user.id,
                        result: result.winner,
                        date: new Date(result.createdAt).getDate() + "/" + new Date(result.createdAt).toLocaleString('default', { month: 'long' })
                    }
                    this.setState({
                        ...this.state,
                        confirmationMessage:confirmationMessage,
                    })
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }

    render() {
        return (
            <React.Fragment>
        <button className="primary-btn" onClick={e => this.openModal(e)}>Add Game</button>
        {this.state.showModal &&
        <div className="overlay">
        <div className="content">
             { this.closeicon() }
            {this.state.confirmationMessage ? <div><p>Please confirm the information below </p>
                <p>White: {this.state.confirmationMessage.white}</p>
                <p>Black: {this.state.confirmationMessage.black}</p>
                <p>Result: {this.state.confirmationMessage.result}</p>
                <p>Date: {this.state.confirmationMessage.date}</p>
                </div>
            :
             <input className="form-control" 
             type="text" value={this.state.gameUrl} 
             name="gameUrl"
             onChange={this.handleInputChange} 
             placeholder="Insert URL here..."
             />
            }

            <button className="btn primary-btn" onClick={e => this.handleClick(e)}>Confirm</button>

            </div>
        </div>
            }


            </React.Fragment>

        )
    }
}
