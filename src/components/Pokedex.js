import { Component } from 'react'
import Axios from 'axios'

class Pokedex extends Component {
    constructor() {
        super()
        this.state = {
            pokemonName: 'pikachu',
            pokemonImage: ''
        }
    }

    componentDidMount() {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`).then((res) => {
            this.setState({
                pokemonImage: res.data.sprites.front_default
            })
        })
    }

    componentDidUpdate() {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`).then((res) => {
            this.setState({
                pokemonImage: res.data.sprites.front_default
            })
        })
    }

    render() {
        return(
            <div>
                <h1>Fischer-Price My First Pokedex</h1>
                <input
                    type='text'
                    value={this.state.pokemonName}
                    onChange={(event) => {
                        this.setState({pokemonName: event.target.value.toLowerCase()})
                    }}
                />
                <p><img src={this.state.pokemonImage} /></p>
            </div>
        )
    }
}

export default Pokedex