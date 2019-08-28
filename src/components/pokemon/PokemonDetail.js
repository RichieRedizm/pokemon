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
          <span key={item}>{item}</span>
        ))}
      </div>
    )
  }

  const { name, image, classification, types, resistant, weaknesses } = pokemon
  return (
    <Fragment>
      <Link to={`/`} className='btn btn-light btn-sm my-1'>
        go back to search
      </Link>

      {name && <h2>{name}</h2>}
      {classification && <strong>{classification}</strong>}
      <div className='detail-image'>
        <img src={image} alt={name} />
      </div>
      <div className='card grid-2'>
        <div>
          {types && <strong>Type:</strong>}
          {types && formatArrayList(types)}
          {resistant && <strong>Resistant: </strong>}
          {resistant && formatArrayList(resistant)}
          {weaknesses && <strong>weaknesses: </strong>}
          {weaknesses && formatArrayList(weaknesses)}
        </div>
        <div>
          {weaknesses && <strong>weaknesses: </strong>}
          {weaknesses && formatArrayList(weaknesses)}
        </div>
      </div>
    </Fragment>
  )
}

export default PokemonDetail
