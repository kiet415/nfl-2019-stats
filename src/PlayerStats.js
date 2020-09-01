import React from "react"
const statMap = {
    "Rush_Yds" : "Rush Yards",
    "Rush_Att": "Rush Attempts",
    "Rush_TD": "Rush TD",
    "Rush_20": "Rush 20+",
    "Rush_40": "Rush 40+",
    "Rush_Lng": "Rush Long",
    "Rush_1st": "Rush 1st Downs",
    "Rush_1st_perc": "Rush 1st Down %",
    "Rush_FUM": "Rush Fum",
    "Rec": "Rec",
    "Rec_Yds": "Rec Yards",
    "Rec_TD": "Rec TD",
    "Rec_20": "Rec 20+",
    "Rec_40": "Rec 40+",
    "Rec_Lng": "Rec Long",
    "Rec_1st": "Rec 1st Downs",
    "Rec_1st_perc": "Rec 1st Down %",
    "Rec_FUM": "Rec Fum",
    "Rec_YAC_R": "Rec Yards After Catch",
    "Tgts": "Targets",
    "FGM": "FGM",
    "fg_Att": "FG Att",
    "FG_perc": "FG %",
    "19_a_m": "1-19 Yards",
    "29_a_m": "20-29 Yards",
    "39_a_m": "30-39 Yards",
    "49_a_m": "40-49 Yards",
    "50_a_m": "50+ Yards",
    "Lng": "FG Long",
    "FG_Blk": "FG Block",
    "Pass_Yds": "Pass Yards",
    "Yds_Att": "Pass Yards per Att",
    "pass_Att": "Pass Att",
    "TD": "Pass TD",
    "Cmp": "Completions",
    "Cmp_perc": "Completion %",
    "INT": "INT",
    "Rate": "Rating",
    "1st": "1st Down",
    "1st_perc": "1st Down %",
    "20_plus": "Pass 20+",
    "40_plus": "Pass 40+",
    "pass_Lng": "Pass Long",
    "sck": "Sacks",
    "sckY": "Sacks Yard Lost"
};

function PlayerStats({stats = {} }) {

    const checkLength = Object.keys(stats).length > 0;
    
    return checkLength ? (
        
        <div className = "statTable" >
            {Object.keys(stats).map(statsKeys => (
                <div>

                    <div>
                        <div className = "category">{statMap[statsKeys]}</div>
                        
                    </div>                 
                    <div>
                        <div className = "categoryStats">{ Number(stats[statsKeys]).toLocaleString()}</div>
                    </div>
                    
                </div>
            ))}
        </div>
    )

    : <div> No 2019 stats avaliable or messed up data</div>
}

export default PlayerStats