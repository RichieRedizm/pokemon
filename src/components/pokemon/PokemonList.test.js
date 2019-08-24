import React from 'react'
import GraphQLContext from '../../context/graphQL/graphQLContext'
import { render, cleanup } from '@testing-library/react'
import PokemonList from './PokemonList'

afterEach(cleanup)

function renderPokemonList(state) {
  return render(
    <GraphQLContext.Provider value={state}>
      <PokemonList />
    </GraphQLContext.Provider>
  )
}
test('if loading set to true load Spinner component', () => {
  const { getByTestId, asFragment } = renderPokemonList({
    pokemons: [],
    loading: true
  })

  expect(getByTestId('loading'))
  expect(asFragment()).toMatchSnapshot()
})

test('if pokemons data not null generate list of pokemon items', () => {
  const { getByTestId, asFragment } = renderPokemonList({
    pokemons: [
      {
        id: 'UG9rZW1vbjowMDE=',
        number: '001',
        name: 'Bulbasaur',
        image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
        __typename: 'Pokemon'
      },
      {
        id: 'UG9rZW1vbjowMDI=',
        number: '002',
        name: 'Ivysaur',
        image: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
        __typename: 'Pokemon'
      }
    ],
    loading: false
  })
  expect(getByTestId('pokemon-list'))
  expect(asFragment()).toMatchSnapshot()
})
