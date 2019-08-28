import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PokemonListItem = ({ pokemon: { id, name, image } }) => {
  return (
    <div className='card text-center pokemon-item-card'>
      <div className='meta'>
        <h3>{name}</h3>
        <Link
          to={`/pokemon/${id}/${name}`}
          className='btn btn-dark btn-sm my-1'
        >
          stats
        </Link>
      </div>
      <img src={image} alt='pokemon' />
    </div>
  )
}

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonListItem
