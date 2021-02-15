import React, {Component} from 'react'

export default class LeagueTableRows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ranking: props.ranking
        };
      };   
    
    render() {

        return (
            
            <React.Fragment>
            {this.props.showRaking &&
                this.state.ranking &&
                   this.state.ranking
                   .sort((a,b) => b.wins - a.wins)
                   .map((item, index) => { 
                        return(
                            <tr key={index}>
                            <th scope="col">{index + 1}</th>
                            <th scope="col">{item.name}</th>
                            <th scope="col">{item.wins}</th>
                            <th scope="col">{item.draws}</th>
                            <th scope="col">{item.losses}</th>
                            <th scope="col">{item.games_played} / {item.games_required}</th>
                            <th scope="col">{item.aelo}</th>
                        </tr>)
                    })
              
            }
            {this.props.game && this.props.showFixtures && 
                <tr className="rows">
                <th scope="row" ></th>
                <td>{this.props.game.players.white.user.name}</td>
                <td>{this.props.game.players.black.user.name}</td>
                <td>{this.props.game.speed}</td>
                <td>{this.props.game.winner}</td>
                </tr>
            }
       
        </React.Fragment>
    )
    }
}
