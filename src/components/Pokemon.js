import React, { Component } from 'react';
import { PokemonDetail } from './PokemonDetail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import  './Pokemon.css';

export class Pokemon extends Component {

    


    render() {
        const pokemonName = this.props.pokemon.name;

        const pokemonContainerStyle = {
            backgroundColor: "#ffb81f",
            width: "30vmin",
            display: "inline-block",
            borderStyle: "solid",
            margin: "5px",
            padding: "5px"
        };


        return (
            <div className="pokemon-container" style={pokemonContainerStyle}>
            <Router>
            <div>
            
            <ul>
              <li>
                <img src={this.props.pokemon.sprites['front_default']} alt="pokemon"/><br></br>
                <Link to={`/pokemon-details/${pokemonName}`}>{pokemonName}</Link>
              </li>
            </ul> 
      
            <Switch>
              <Route path={`/pokemon-details/${pokemonName}`} >
                <PokemonDetail pokemon={this.props.pokemon} />
              </Route>
            </Switch>
          </div>
          </Router>
          </div>
        );
        
    }
}

export default Pokemon
