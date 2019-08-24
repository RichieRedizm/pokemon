import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

const PokemonListItem = ({ pokemon: { name } }) => {
  return (
    <div className='card text-center pokemon-item-card'>
      {/* <img
        src={avatar_url}
        alt='profile'
        className='round-img'
        style={{ width: '60px' }}
      /> */}
      <h3>{name}</h3>
      {/* <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
        more
      </Link> */}
    </div>
  )
}

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonListItem
