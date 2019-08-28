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

  const formatArrayList = list => {
    return (
      <div className='detail-list'>
        {list.map(item => (
          <span key={item}>{item} /</span>
        ))}
      </div>
    )
  }
  const formatObjectList = object => {
    return object.map((obj, index) => {
      const { name, type, damage } = obj
      return (
        <div key={index} className='detail-object-list'>
          <span>
            <strong className='label-light'>Name:</strong> {name}
          </span>
          <span>
            <strong className='label-light'>Type:</strong> {type}
          </span>
          <span>
            <strong className='label-light'>Damage:</strong> {damage}
          </span>
        </div>
      )
    })
  }

  const {
    name,
    image,
    classification,
    types,
    resistant,
    weaknesses,
    attacks
  } = pokemon

  return (
    <Fragment>
      <Link to={`/`} className='btn btn-light btn-sm my-1'>
        go back to search
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
      <div className='card grid-2'>
        <div className='detail'>
          {types && <strong className='label-dark'>Type:</strong>}
          {types && formatArrayList(types)}
          {resistant && <strong className='label-dark'>Resistant: </strong>}
          {resistant && formatArrayList(resistant)}
          {weaknesses && <strong className='label-dark'>weaknesses: </strong>}
          {weaknesses && formatArrayList(weaknesses)}
        </div>
        <div className='detail'>
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