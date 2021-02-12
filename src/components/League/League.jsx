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
            api.getGameData(this.state.gameUrl)
                .then(data => {
                    console.log("success", data)
                })
                .catch(error => {
                    console.error(error)
                })
    };

    render() {
        return (
            <div className="League">
                <h2 className="primary-text">ACL Page</h2>

                <h5>Add a Lichess game URL</h5>
                <form>
                    <input className="form-control" type="text" value={this.state.gameUrl} name="gameUrl" onChange={this.handleInputChange} placeholder="Insert URL here..."/>
                    <button className="btn primary-btn"onClick={e => this.handleClick(e)}>Submit</button>
                </form>
            </div>
        )
    }
}
