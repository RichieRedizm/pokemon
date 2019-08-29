import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GraphQLContext from '../../context/graphQL/graphQLContext'
import { render, cleanup } from '@testing-library/react'
import PokemonDetail from './PokemonDetail'

afterEach(cleanup)

function renderPokemonDetail(state) {
  const match = {
    params: {
      id: 'UG9rZW1vbjowMDE=',
      name: 'Bulbasaur'
    }
  }
  return render(
    <GraphQLContext.Provider value={state}>
      <Router>
        <PokemonDetail match={match} />
      </Router>
    </GraphQLContext.Provider>
  )
}
test('if loading set to true load Spinner component', () => {
  const { getByTestId, asFragment } = renderPokemonDetail({
    pokemonDetails: jest.fn(),
    pokemons: [],
    loading: true
  })

  expect(getByTestId('loading'))
  expect(asFragment()).toMatchSnapshot()
})

test('if pokemon data not null generate statistics detail', () => {
  const pokemonDetailData = {
    pokemonDetails: jest.fn(),
    pokemon: {
      name: 'Bulbasaur',
      weight: {
        minimum: '6.04kg',
        maximum: '7.76kg'
      },
      height: {
        minimum: '0.61m',
        maximum: '0.79m'
      },
      classification: 'Seed Pokémon',
      types: ['Grass', 'Poison'],
      resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
      attacks: {
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
      },
      image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg'
    },
    loading: false
  }

  const { getByTestId, asFragment } = renderPokemonDetail(pokemonDetailData)
  expect(getByTestId('pokemon-detail'))
  expect(asFragment()).toMatchSnapshot()
})
