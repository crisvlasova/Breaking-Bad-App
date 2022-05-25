export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS'
export const GET_CHARACTER = 'GET_CHARACTER'
export const ADD_CHARACTER_FAV = 'ADD_CHARACTER_FAV'
export const REMOVE_CHARACTER_FAV = 'REMOVE_CHARACTER_FAV'
export const CLEAR_STATE = 'CLEAR_STATE'

export const getAllCharacters = () => (dispatch) => {
  return fetch(`https://www.breakingbadapi.com/api/characters`)
    .then((r) => r.json())
    .then((json) => {
      dispatch({ type: GET_ALL_CHARACTERS, payload: json });
    });
};

export const getCharacter = (id) => (dispatch) => {
  return fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
    .then((r) => r.json())
    .then((json) => {
      dispatch({ type: GET_CHARACTER, payload: json });
    });
};

export const clearState = () => {
  return {type: CLEAR_STATE}
}

export const addCharacterFav = (character) => {
  return { type: ADD_CHARACTER_FAV, payload: character };
};

export const removeCharacterFav = (id) => {
  return { type: REMOVE_CHARACTER_FAV, payload: id}
}