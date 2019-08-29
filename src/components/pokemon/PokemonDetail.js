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
          {types && <strong className='label-dark'>Type:</strong>}
          {types && formatArrayList(types)}
          {weight && <strong className='label-dark'>Weight:</strong>}
          {weight && formatMinMaxList(weight)}
          {height && <strong className='label-dark'>Weight:</strong>}
          {height && formatMinMaxList(height)}
          {resistant && <strong className='label-dark'>Resistant: </strong>}
          {resistant && formatArrayList(resistant)}
          {weaknesses && <strong className='label-dark'>weaknesses: </strong>}
          {weaknesses && formatArrayList(weaknesses)}
        </div>
        <div className='card detail'>
          {attacks.fast && (
            <strong className='label-dark'>Fast Attacks: </strong>
          )}
          {attacks.fast && formatObjectList(attacks.fast)}
          {attacks.special && (
            <strong className='label-dark'>Special Attacks: </strong>
          )}
          {attacks.special && formatObjectList(attacks.special)}
        </div>
      </div>
    </Fragment>
  )
}

export default PokemonDetail
