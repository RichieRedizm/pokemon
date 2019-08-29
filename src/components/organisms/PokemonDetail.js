import React, { Fragment, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import GraphQLContext from '../../context/graphQL/graphQLContext'
import Spinner from '../search/Spinner'
import Attacks from '../molecules/PokemonAttacks'
const { formatArrayList, formatMinMaxList } = require('../helper')

const PokemonDetail = ({ match }) => {
  const graphQLContext = useContext(GraphQLContext)
  const { loading, pokemon, pokemonDetails } = graphQLContext

  useEffect(() => {
    pokemonDetails(match.params.id, match.params.name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading || pokemon === null) return <Spinner />

  const {
    name,
    image,
    classification,
    types,
    weight,
    height,
    resistant,
    weaknesses,
    attacks
  } = pokemon

  // TODO: very bloated - need to split into atoms
  return (
    <Fragment>
      <Link to={`/`} className='btn btn-light btn-sm'>
        Back to Pokemon list
      </Link>
      <div className='detail-wrap' data-testid='pokemon-detail'>
        <div className='detail-meta'>
          {name && <h2>{name}</h2>}
          {classification && <h3 className='label-dark'>{classification}</h3>}
        </div>
        <div className='detail-image'>
          <img src={image} alt={name} />
        </div>
      </div>
      <div className='grid-2'>
        <div className='card detail'>
          <h3 className='label-dark'>Statistics</h3>
          {types && (
            <div>
              <strong className='label-dark'>Type: </strong>
              {formatArrayList(types)}
            </div>
          )}
          {weight && (
            <div>
              <strong className='label-dark'>Weight: </strong>
              {formatMinMaxList(weight)}
            </div>
          )}
          {height && (
            <div>
              <strong className='label-dark'>Height: </strong>
              {formatMinMaxList(height)}
            </div>
          )}
          {resistant && (
            <div>
              <strong className='label-dark'>Resistant: </strong>
              {formatArrayList(resistant)}
            </div>
          )}
          {weaknesses && (
            <div>
              <strong className='label-dark'>weaknesses: </strong>
              {formatArrayList(weaknesses)}
            </div>
          )}
        </div>
        {attacks && <Attacks attacks={attacks} />}
      </div>
    </Fragment>
  )
}

export default PokemonDetail
