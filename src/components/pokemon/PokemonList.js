import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
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
        <div data-testid='pokemon-list' style={listStyle}>
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

PokemonList.contextTypes = {
  pokemons: PropTypes.array,
  loading: PropTypes.bool
}

export default PokemonList
