/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
 import { GameContext } from '../context/gameContext';

 
 const Scoreboard = ({ currTeam }) => {
 //load score board
 const { state } = useContext(GameContext)
 const { teams } = state

 const loadScoreBoard = () => {
   return (
   teams.map((teamName, i) => {
    return (
      <tr id={`team${i + 1}`} style={{ background: currTeam === `team${i + 1}` ? 'lightgreen' : 'transparent' }}>
          <td>{sessionStorage[`team${i + 1 }`]}</td>
          <td>{sessionStorage[`score${i + 1}`]}</td>
        </tr>
    )
   })
   )
 }


return (
  <div>
    <div>Scoreboard</div>
    <table
      className="table"
      style={{ width: '400px' }}
    >
      <thead>
        <tr>
          <th scope="col">Team</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        {/* another place where the amount of teams needs to be changed */}
        {/* <tr id="team1" style={{ background: currTeam === 'team1' ? 'lightgreen' : 'transparent' }}>
          <td>{sessionStorage.team1}</td>
          <td>{sessionStorage.score1}</td>
        </tr>
        <tr id="team2" style={{ background: currTeam === 'team2' ? 'lightgreen' : 'transparent' }}>
          <td>{sessionStorage.team2}</td>
          <td>{sessionStorage.score2}</td>
        </tr> */}
        {loadScoreBoard()}
      </tbody>
    </table>
  </div> 
);
}

export default Scoreboard;
