import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import PokemonAttacks from './PokemonAttacks'

test('it displays a pokemon list item', () => {
  const pokemonAttacks = {
    fast: [
      {
        name: 'Tackle',
        type: 'Normal',
        damage: 12
      },
      {
        name: 'Vine Whip',
        type: 'Grass',
        damage: 7
      }
    ],
    special: [
      {
        name: 'Power Whip',
        type: 'Grass',
        damage: 70
      },
      {
        name: 'Seed Bomb',
        type: 'Grass',
        damage: 40
      },
      {
        name: 'Sludge Bomb',
        type: 'Poison',
        damage: 55
      }
    ]
  }
  const { getByTestId, asFragment } = render(
    <Router>
      <PokemonAttacks attacks={pokemonAttacks} />
    </Router>
  )

  expect(getByTestId('pokemon-attacks'))
  expect(asFragment()).toMatchSnapshot()
})
