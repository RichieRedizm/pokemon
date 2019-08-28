import React, { useReducer, useEffect } from 'react'
import GraphQLContext from './graphQLContext'
import GraphQLReducer from './graphQLReducer'
import { GET_POKEMONS, GET_POKEMON_DETAILS, SET_LOADING } from '../types'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'

const GraphQLState = props => {
  const initialState = {
    pokemons: null,
    pokemon: null,
    loading: false
  }
  const [state, dispatch] = useReducer(GraphQLReducer, initialState)

  // load all pokemons
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  })

  useEffect(() => {
    setLoading()
    client
      .query({
        query: gql`
          {
            pokemons(first: 151) {
              id
              number
              name
              image
            }
          }
        `
      })
      .then(result =>
        dispatch({
          type: GET_POKEMONS,
          payload: result.data.pokemons
        })
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // load individual user details
  const pokemonDetails = (id, name) => {
    setLoading()
    client
      .query({
        query: gql`
          {
            pokemon(id: "${id}", name: "${name}") {
              id
              number
              name
              weight {
                minimum
                maximum
              }
              height {
                minimum
                maximum
              }
              classification
              types
              resistant
              weaknesses
              attacks {
                fast {
                  name
                  type
                  damage
                }
                special {
                  name
                  type
                  damage
                }
              }
              fleeRate
              maxCP
              evolutions {
                id
              }
              evolutionRequirements {
                amount
                name
              }
              maxHP
              image
            }
          }
        `
      })
      .then(result =>
        dispatch({
          type: GET_POKEMON_DETAILS,
          payload: result.data.pokemon
        })
      )
  }

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <GraphQLContext.Provider
      value={{
        pokemons: state.pokemons,
        pokemon: state.pokemon,
        loading: state.loading,
        pokemonDetails
      }}
    >
      {props.children}
    </GraphQLContext.Provider>
  )
}

export default GraphQLState
