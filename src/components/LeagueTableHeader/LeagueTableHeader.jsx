import React from 'react'

export default function LeagueTableHeader(props) {
    return (
        <React.Fragment>
            {props.showRaking &&  
                <tr>
                  <th className="sticky-th" scope="col">#</th>
                  <th className="sticky-th" scope="col">Name</th>
                  <th scope="col">w</th>
                  <th scope="col">D</th>
                  <th scope="col">L</th>
                  <th scope="col">Games</th>
                  <th scope="col">Aelo</th>
              </tr>
            }
            {props.showFixtures &&  
                <tr>
                  <th className="sticky-th" scope="col">#</th>
                  <th scope="col">Whites</th>
                  <th scope="col">Blacks</th>
                  <th scope="col">Date</th>
                  <th scope="col">Result</th>
              </tr>
            }
  
        </React.Fragment>
    )
}
