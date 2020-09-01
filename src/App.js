import React from 'react';
import './App.css';
import Header from "./Header";
import {getTeams} from "./api.js";
import {teams} from "./Logos.js";
import TeamLogos from "./TeamLogos.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Players from "./Players";


class App extends React.Component {
  constructor(props) {  
    super(props);

    this.state = {
      currentTeam : '',
      allTeams : [],
    }

  }

  componentDidMount() {
    getTeams()
    .then(response => {
      this.setState({allTeams : response.data})
    })

    
  }
  
 
  render() {
    const{currentTeam} = this.state;
    console.log(this.state.allTeams);
    return (
      <div className="App">
        <Header />
        
        <Router>
          

          <Switch>
          
          
            <Route path="/Teams/:id">
              <Players currentTeam = {this.state.currentTeam}/>

            </Route>
            
            <Route path ="*" >
            <div className ="container">

            
            {this.state.allTeams.map(ele => {
              return(
              <Link to= {"/Teams/"+`${ele.id}`}>
                <div className = "button" onClick = {()=> this.setState({currentTeam : ele.id}) }> 
                  <TeamLogos
                    teamName = {ele.name}
                  />
                  {ele.name}
                </div>
              </Link>
              )
              })}

              
            </div>
            </Route>
          </Switch>
        </Router>  
      </div>
    );
  }


}



export default App;
