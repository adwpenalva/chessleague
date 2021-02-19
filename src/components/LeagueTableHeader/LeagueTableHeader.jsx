import React from 'react'

export default function LeagueTableHeader(props) {
    return (
        <React.Fragment>
            {props.showRaking &&  
                <tr className="sticky-items">
                  <th className="sticky-th default-black-bg" scope="col">#</th>
                  <th className="sticky-th default-black-bg" scope="col">Name</th>
                  <th scope="col">w</th>
                  <th scope="col">D</th>
                  <th scope="col">L</th>
                  <th scope="col">Games</th>
                  <th scope="col">Aelo</th>
              </tr>
            }
            {props.showFixtures &&  
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th className="default-black-bg" scope="col">Whites</th>
                  <th className="default-black-bg" scope="col">Blacks</th>
                  <th className="default-black-bg" scope="col">Date</th>
                  <th className="default-black-bg" scope="col">Result</th>
              </tr>
            }
  
        </React.Fragment>
    )
}
