import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PokemonListItem = ({ pokemon: { id, name, image, number } }) => {
  return (
    <div data-testid='pokemon-item-card' className='card list-item text-center'>
      <h3>{name}</h3>
      <Link to={`/pokemon/${id}/${name}`}>
        <button className='btn btn-dark btn-sm'>stats</button>
        <div className='image-wrap'>
          <img src={image} alt='pokemon' />
        </div>
      </Link>
      <strong className='number'>{number}</strong>
    </div>
  )
}

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonListItem
