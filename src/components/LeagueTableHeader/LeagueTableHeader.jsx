import React from 'react'

export default function LeagueTableHeader(props) {
    return (
        <React.Fragment>
            {props.showRaking &&  
                  <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Wins</th>
                  <th scope="col">Losses</th>
                  <th scope="col">Aelo</th>
                  <th scope="col">Games</th>
              </tr>
            }
            {props.showFixtures &&  
                  <tr>
                  <th scope="col">#</th>
                  <th scope="col">Whites</th>
                  <th scope="col">Blacks</th>
                  <th scope="col">Speed</th>
                  <th scope="col">Winner</th>
              </tr>
            }
  
        </React.Fragment>
    )
}
