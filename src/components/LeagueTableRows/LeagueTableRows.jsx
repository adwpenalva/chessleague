import React, {Component} from 'react'
import AddGameModal from '../AddGameModal/AddGameModal'

export default class LeagueTableRows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal:  false,
        };
      };   
    openModal = (e) =>    {
        this.setState({
            showModal: true
        })
    }
    render() {
        console.log("this.state.fixtures" , this.props.fixtures)
        return (
            <React.Fragment>
            {this.props.showRaking &&
                this.props.ranking &&
                   this.props.ranking
                   .sort((a,b) => b.aelo - a.aelo)
                   .map((item, index) => { 
                        return(
                            <tr className="sticky-items" key={index}>
                                <th scope="col">{index + 1}</th>
                                <th scope="col">{item.id}</th>
                                <td scope="col">{item.wins}</td>
                                <td scope="col">{item.draws}</td>
                                <td scope="col">{item.losses}</td>
                                <td scope="col">{item.games_played} / {item.games_required}</td>
                                <td scope="col">{item.aelo}</td>
                            </tr>
                            )
                    })
            }
            {this.props.showFixtures && 
                this.props.fixtures &&
                this.props.fixtures.map((item, index) => {
                    return(
                        <tr className="rows" key={item.id}>
                            {/* <th scope="row" >{index + 1}</th> */}
                            <td>{item.white}</td>
                            <td>{item.black}</td>
                            <td>{new Date(item.deadline).getDate() + "/" + new Date(item.deadline).toLocaleString('default', { month: 'long' })}</td>
                                {item.outcome ? 
                                    <td>{item.winner_name}</td>
                                    :
                                   <td><AddGameModal game={item} updateLeagueData={this.props.updateLeagueData} /></td>
                             
                                }
                        </tr>
                    )
                }) 
            }
      
       
        </React.Fragment>
    )
    }
}
