import React from 'react'
const { formatObjectList } = require('../helper')

const PokemonAttacks = ({ attacks }) => {
  return (
    <div data-testid='pokemon-attacks' className='card detail'>
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
  )
}

export default PokemonAttacks
