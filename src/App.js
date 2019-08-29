import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GraphQLState from './context/graphQL/GraphQLState'
import NotFound from './components/search/NotFound'
import PokemonList from './components/organisms/PokemonList'
import PokemonDetail from './components/organisms/PokemonDetail'

function App() {
  return (
    <GraphQLState>
      <Router>
        <div className='container'>
          <header>
            <h1>Pokemon</h1>
          </header>
          <Switch>
            <Route exact path='/' component={PokemonList} />
            <Route exact path='/pokemon/:id/:name' component={PokemonDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </GraphQLState>
  )
}

export default App
