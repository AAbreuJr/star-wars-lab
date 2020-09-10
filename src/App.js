import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { getAllStarships } from './services/sw-api';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

class App extends Component {
  
  state = {
    starships: []
  };

  getStarship = (idx) => {
    return this.state.starships[idx];
  }

  async componentDidMount() {
    const starships = await getAllStarships();
    this.setState({ starships: starships.results });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">STAR WARS STARSHIPS</header>
          <Route exact path='/' render={() => 
            <card>
              {this.state.starships.map(starship => 
                <Link
                  to={{
                    pathname: '/starships',
                    state: starship
                  }}
                  key={starship.name}
                >
                  {starship.name}
                </Link>
              )}
            </card>
          }/>
          <Route path='/starships' render={({location}) => 
            <StarshipDetails
              location={location}
            />
          }/>
      </div>
    );
  }

}

export default App;
