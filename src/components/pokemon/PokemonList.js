import React, { Fragment, useContext } from 'react'
import GraphQLContext from '../../context/graphQL/graphQLContext'
import PokemonListItem from './PokemonListItem'
import Spinner from '../search/Spinner'

const PokemonList = () => {
  const graphQLContext = useContext(GraphQLContext)
  const { loading, pokemons } = graphQLContext

  if (loading) {
    return <Spinner />
  }

  return (
    <Fragment>
      {pokemons && (
        <div style={listStyle}>
          {pokemons.map(pokemon => (
            <PokemonListItem key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </Fragment>
  )
}

const listStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: '1rem'
}

export default PokemonList
