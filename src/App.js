import './App.css'
import { Component } from 'react'
import Pokedex from './components/Pokedex'

class App extends Component {
    render() {
        return (
            <div className='App-header'>
                <Pokedex />
            </div>
        )
    }
}

export default App