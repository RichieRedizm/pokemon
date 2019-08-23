import React from 'react'
import './App.css'
import GraphQLState from './context/graphQL/GraphQLState'
import PokemonList from './components/pokemon/PokemonList'

function App() {
  return (
    <GraphQLState>
      <div className='container'>
        <header>
          <h1>Pokemon</h1>
        </header>
        <PokemonList />
      </div>
    </GraphQLState>
  )
}

export default App
