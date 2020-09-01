import axios from 'axios';

export const getTeams = () => {
    return axios.get("https://nfl-2019-players.herokuapp.com/teams")
    .catch(e=>console.log(e));
}

export const getPlayers = (id) => {
    return axios.get("https://nfl-2019-players.herokuapp.com/teams/" + id)
    .catch(e=>console.log(e));
}
export const getStats = (id) => {
    return axios.get("https://nfl-2019-players.herokuapp.com/stats/" + id )
    .catch(e=>console.log(e));
}