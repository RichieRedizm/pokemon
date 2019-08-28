import React, { Fragment, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import GraphQLContext from '../../context/graphQL/graphQLContext'
import Spinner from '../search/Spinner'

const PokemonDetail = ({ match }) => {
  const graphQLContext = useContext(GraphQLContext)
  const { loading, pokemon, pokemonDetails } = graphQLContext

  useEffect(() => {
    pokemonDetails(match.params.id, match.params.name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading || pokemon === null) return <Spinner />

  // console.log('pokemon', pokemon)
  const { name } = pokemon
  return (
    <Fragment>
      <Link to={`/`} className='btn btn-light btn-sm my-1'>
        go back to search
      </Link>
      {name && <div>{name}</div>}
    </Fragment>
  )
}

export default PokemonDetail
