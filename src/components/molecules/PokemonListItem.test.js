import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import PokemonListItem from './PokemonListItem'

test('it displays a pokemon list item', () => {
  const pokemon = {
    id: 'UG9rZW1vbjowMDE=',
    number: '001',
    name: 'Bulbasaur',
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    __typename: 'Pokemon'
  }
  const { getByTestId, asFragment } = render(
    <Router>
      <PokemonListItem pokemon={pokemon} />
    </Router>
  )

  expect(getByTestId('pokemon-item-card'))
  expect(asFragment()).toMatchSnapshot()
})
