import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import PokemonList from './PokemonList'

configure({ adapter: new Adapter() })

// resetting modules before each test
// beforeEach(() => {
//   jest.resetModules()
// })

it('if loading set to true load Spinner component', () => {
  const graphQLContext = {
    pokemons: null,
    loading: true
  }
  const component = shallow(<PokemonList />, { graphQLContext })
  expect(component.find('img.loading').exists())
})

it('if pokemons data not null generate list of pokemon items', () => {
  const graphQLContext = {
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
  }
  const component = shallow(<PokemonList />, { graphQLContext })
  expect(component.find('.pokemon-item-card').exists())
})
