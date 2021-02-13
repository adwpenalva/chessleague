import React, { Component } from 'react'
import './League.scss';
import api from "../../services/api";
export default class League extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            gameUrl: ""
        }
      };

    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
          })
    };

    handleClick = (e) => {
        e.preventDefault();

        const isValid = this.validateUrl(this.state.gameUrl)

        if (isValid) {
            console.log('ISVALID')
            api.getGameData(this.state.gameUrl)
            .then(data => {
                console.log("success", data)
            })
            .catch(error => {
                console.error(error)
            })
        }

        // TERMINAR LÓGICA COM ERROR MESSAGE CASO LINK INVÁLIDO
    };

    validateUrl = (url) => {
        const validBaseUrls = ['https://www.lichess.org/','www.lichess.org/','https://lichess.org/','lichess.org/'];
        let urlArray = url.split('/')
        let gameId = urlArray[url.split('/').length-1]
        let lichessUrl = url.slice(0, url.length - gameId.length)
        for (let validUrl of validBaseUrls) {
            if (lichessUrl === validUrl && (gameId.length === 8 || gameId.length === 12)) {
                return true
            }  
        }
        return false
    }

    render() {
        return (
            <div className="League">
                <h2 className="primary-text">ACL Page</h2>

                <h5>Add a Lichess game URL</h5>
                <form>
                    <input className="form-control" type="text" value={this.state.gameUrl} name="gameUrl" onChange={this.handleInputChange} placeholder="Insert URL here..."/>
                    <button disabled={!this.validateUrl(this.state.gameUrl)} className="btn primary-btn" onClick={e => this.handleClick(e)}>Submit</button>
                </form>
            </div>
        )
    }
}
