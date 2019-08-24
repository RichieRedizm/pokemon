import React, { useReducer, useEffect } from 'react'
import GraphQLContext from './graphQLContext'
import GraphQLReducer from './graphQLReducer'
import { GET_POKEMONS, GET_POKEMON_DETAILS, SET_LOADING } from '../types'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'

const GraphQLState = props => {
  const initialState = {
    pokemons: [],
    pokemon: [],
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
            pokemons(first: 10) {
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

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <GraphQLContext.Provider
      value={{
        pokemons: state.pokemons,
        pokemon: state.pokemon,
        loading: state.loading
      }}
    >
      {props.children}
    </GraphQLContext.Provider>
  )
}

export default GraphQLState
