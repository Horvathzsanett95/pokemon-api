import React, { Component } from 'react'

export class PokemonDetail extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.pokemon.name}</p>
                <p>Height: {this.props.pokemon.height}</p>
                <p>Weight: {this.props.pokemon.weight}</p>
            </div>
        )
    }
}
export default PokemonDetail