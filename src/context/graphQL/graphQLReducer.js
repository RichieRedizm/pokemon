import { GET_POKEMONS, GET_POKEMON_DETAILS, SET_LOADING } from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      console.log('graphQL Reducer action', action)
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      }
    case GET_POKEMON_DETAILS:
      return {
        ...state,
        pokemon: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
