import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PokemonListItem = ({ pokemon: { id, name, image, number } }) => {
  return (
    <div className='card text-center pokemon-item-card'>
      <div className='meta'>
        <h3>{name}</h3>
        <Link to={`/pokemon/${id}/${name}`} className='btn btn-dark btn-sm'>
          stats
        </Link>
      </div>
      <img src={image} alt='pokemon' />
      <span className='number'>{number}</span>
    </div>
  )
}

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonListItem
