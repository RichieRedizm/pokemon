import React, { Fragment, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import GraphQLContext from '../../context/graphQL/graphQLContext'
import Spinner from '../search/Spinner'
const {
  formatArrayList,
  formatMinMaxList,
  formatObjectList
} = require('../helper')

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

  return (
    <Fragment>
      <Link to={`/`} className='btn btn-light btn-sm'>
        Back to Pokemon list
      </Link>
      <div className='detail-wrap'>
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
          <h3 className='label-dark'>Stats</h3>
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
        <div className='card detail'>
          {attacks && <h3 className='label-dark'>Attacks</h3>}
          {attacks.fast && (
            <div>
              <strong className='label-dark'>Fast Attacks: </strong>
              {formatObjectList(attacks.fast)}
            </div>
          )}
          {attacks.special && (
            <div>
              <strong className='label-dark'>Special Attacks: </strong>
              {formatObjectList(attacks.special)}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default PokemonDetail
