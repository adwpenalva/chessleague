import React from 'react'

export default function LeagueTableRows(props) {
console.log("🚀 ~ file: LeagueTableRows.jsx ~ line 4 ~ LeagueTableRows ~ props", props)

    return (
        
        <React.Fragment>
            {props.showRaking &&  
                <React.Fragment>
                <tr>
                    {/* HARDCODE SAMPLE */}
                  <th scope="col">#</th>
                  <th scope="col">Penny</th>
                  <th scope="col">10</th>
                  <th scope="col">4</th>
                  <th scope="col">1200</th>
                  <th scope="col">12 / 36</th>
              </tr>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Vik</th>
                  <th scope="col">19</th>
                  <th scope="col">4</th>
                  <th scope="col">1300</th>
                  <th scope="col">23 / 36</th>
              </tr>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Dodo</th>
                  <th scope="col">0</th>
                  <th scope="col">14</th>
                  <th scope="col">900</th>
                  <th scope="col">14 / 36</th>
              </tr>
              </React.Fragment>
              
              
            }
            {props.game && props.showFixtures && 
                <tr className="rows">
                <th scope="row" ></th>
                <td>{props.game.players.white.user.name}</td>
                <td>{props.game.players.black.user.name}</td>
                <td>{props.game.speed}</td>
                <td>{props.game.winner}</td>
                </tr>
            }
       
        </React.Fragment>
    )
}
