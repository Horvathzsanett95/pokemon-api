import React, { Component } from 'react'
import pikachu from '../pikachu.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Welcome</h2>
                <p>This is the Reactomon app</p>
                <img src={pikachu} className="App-logo" alt="pikachu" />
            </div>
        )
    }
}
