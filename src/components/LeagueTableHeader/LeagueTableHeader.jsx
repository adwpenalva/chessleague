import React from 'react'

export default function LeagueTableHeader(props) {
    return (
        <React.Fragment>
            {props.showRaking &&  
                  <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Wins</th>
                  <th scope="col">Draws</th>
                  <th scope="col">Losses</th>
                  <th scope="col">Games</th>
                  <th scope="col">Aelo</th>
              </tr>
            }
            {props.showFixtures &&  
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Whites</th>
                  <th scope="col">Blacks</th>
                  <th scope="col">Date</th>
                  <th scope="col">Result</th>
              </tr>
            }
  
        </React.Fragment>
    )
}
