import React from 'react';
import './App.css';
import {getPlayers} from './api.js';
import TeamPositions from './TeamPositions.js';
import {groupBy} from 'lodash';
import  PlayerStats from './PlayerStats.js';
import {getStats} from "./api.js";
import {pickBy} from 'lodash';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlayers : [],
      playerId: "",
      stats : {},
      
    }
  }
  
  getStats = (id) => {
    const {stats} = this.state;
    if(stats[id]) {
      const copy = {...stats};
      delete copy[id];
      this.setState({stats : copy});
    } else {
      getStats(id)
    .then(response => {
      const stats1 = response.data[0];
      const getNonZeros = (num) => num !== "0";
      const result = pickBy(stats1, getNonZeros);
      const copy = {...stats, [id] : result};
      this.setState({stats: copy});
    })
    }
  }

  

  
  componentDidMount() {
    const url = window.location.pathname;
    const teamID = this.props.currentTeam || url.slice(url.lastIndexOf("/") + 1);
    getPlayers(teamID)
    .then(response => { 
        //const newList = groupBy(response.data, "position");
        
        this.setState({allPlayers : response.data})
    })
  }


  

  render() {
    
    return (
        <div className = "players-class">
            <div className = "header">
              <div>Players
              <Link to= {"/"}>
                <div>Go back to team page</div>
              </Link>
              </div>
            </div>


            {this.state.allPlayers.map(ele => {
              return(
                <div className = "positions" key = {ele.id} onClick = {() => this.getStats(ele.id) }>
                    {/* <TeamPositions 
                      position = {ele.position} 
                      name = {ele.name}
                    /> */}
                  <div className = "positionContainer">

                    <div className = "positionNames">
                      {ele.position} <br></br>                
                    </div>

                    <button className = "buttonPlayers">
                     {ele.name}
                    </button>


                  {this.state.stats[ele.id] && 
                    <PlayerStats key = {ele.id}                     
                      stats = {this.state.stats[ele.id]}
                    /> }

                  </div>
                          
                    
                </div>
                )
            })}


          
        </div>
    );
  }


}



export default Players;