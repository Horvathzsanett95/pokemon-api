import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokemons extends Component {
    constructor() {
        super();
        this.state = {
          pokemons : [],
          pokemonDetails : [],
        }    
      }
    
      componentDidMount() {
        this.getPokemons();
      }

    
      getPokemons() {
        let url = "https://pokeapi.co/api/v2/pokemon?limit=100";
        fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data) {
            this.setState({pokemons : data.results}, () => {
              this.state.pokemons.map(pokemon => {
                fetch(pokemon.url)
                .then(response => response.json())
                .then(data => {
                  if (data) {
                    var temp = this.state.pokemonDetails
                    temp.push(data)
                    this.setState({pokemonDetails: temp})
                  }            
                })
                .catch(console.log)
              })
            })        
          }
        })
        .catch(console.log)
      }
    

      render() {
          console.log(this.state.pokemons)

        const {pokemonDetails} = this.state;

        const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
          return (<Pokemon pokemon={pokemon} />);
        });
        
          return (
            <div className="container">
            <div className="card-columns">
              {renderedPokemonList}
            </div>
          </div>
          );

              }
            }
export default Pokemons;