import React from 'react'
import { render, cleanup } from '@testing-library/react'
import PokemonListItem from './PokemonListItem'

afterEach(cleanup)

test('it displays a pokemon list item', () => {
  const pokemon = {
    id: 'UG9rZW1vbjowMDE=',
    number: '001',
    name: 'Bulbasaur',
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    __typename: 'Pokemon'
  }
  const { getByTestId, asFragment } = render(
    <PokemonListItem pokemon={pokemon} />
  )

  expect(getByTestId('pokemon-item-card'))
  expect(asFragment()).toMatchSnapshot()
})
