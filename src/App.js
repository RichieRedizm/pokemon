import React from 'react'
import './App.css'

import PokemonList from './components/pokemon/PokemonList'

function App() {
  return (
    <div className='container'>
      <header>
        <h1>Pokemon</h1>
      </header>
      <PokemonList />
    </div>
  )
}

export default App
