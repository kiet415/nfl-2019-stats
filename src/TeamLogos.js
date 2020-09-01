import React from "react"
import { teams } from "./Logos"

function TeamLogos(props) {
    return (
        <div className = "team-logos">
            <img src = {teams[props.teamName]} width = "240" height = "200"/> 
            

        </div>

    )
}

export default TeamLogos