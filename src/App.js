import React, { Component } from 'react';
import logo from './logo.png';
import pokeball from './pokeball.png';
import Pokemons from './components/Pokemons';
import Home from './components/Home';
import Types from './components/PokemonTypes';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {


  render() {
    const PokeballStyle = {
      height: "30px"
    }

    const NavElementStyle = {
      fontSize: 25,
      display: "inline-block",
      margin: "5px",
      padding: "3px",
      textDecoration: 'none',
      backgroundColor: "#ffb81f",
      borderStyle: "solid",
      width: "150px"
    }
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
      <div className="Nav-Bar">
        <nav>
          <ul>
          
            <li style={NavElementStyle}>
            <img src={pokeball} style={PokeballStyle} alt="pokeball" />
              <Link to="/" style={{ textDecoration: 'none' }}> Home</Link>
            </li>
            
            <li style={NavElementStyle}>
            <img src={pokeball} style={PokeballStyle} alt="pokeball" />
              <Link to="/pokemons" style={{ textDecoration: 'none' }}> Pokemons</Link>
            </li>
            
             <li style={NavElementStyle}>
             <img src={pokeball} style={PokeballStyle} alt="pokeball" />
              <Link to="/types" style={{ textDecoration: 'none' }}> Types</Link>
            </li> 
          </ul>
        </nav>
        <Switch>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
           <Route path="/types">
            <Types />
          </Route> 
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      

    </div>
  );
} }
export default App;
