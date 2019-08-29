import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const PokemonListItem = ({ pokemon: { id, name, image, number } }) => {
  return (
    <Router>
      <div data-testid='pokemon-item-card' className='card text-center'>
        <h3>{name}</h3>
        <Link to={`/pokemon/${id}/${name}`}>
          <button className='btn btn-dark btn-sm'>stats</button>
          <img src={image} alt='pokemon' />
        </Link>
        <strong className='number'>{number}</strong>
      </div>
    </Router>
  )
}

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonListItem
