import React from "react"

function TeamPositions(props) {
    
    return (
        <div className = "positionContainer">
            <div className = "positionNames">
                {props.position} <br></br>
                
            </div>
            <button className = "buttonPlayers">
                        
                {props.name}

            </button>

            
        </div>
    )
}

export default TeamPositions