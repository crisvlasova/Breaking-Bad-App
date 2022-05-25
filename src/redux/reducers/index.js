import { GET_ALL_CHARACTERS, GET_CHARACTER, ADD_CHARACTER_FAV, REMOVE_CHARACTER_FAV, CLEAR_STATE } from '../actions/index'

const initialState = {
  allCharacters: [],
  character: {},
  charactersFav: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };
    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload[0],
      };
    case ADD_CHARACTER_FAV:
      return {
        ...state,
        charactersFav: [...state.charactersFav, action.payload],
      };
    case REMOVE_CHARACTER_FAV:
      return {
        ...state,
        charactersFav: state.charactersFav.filter(char => char.id !== action.payload)
      }

    case CLEAR_STATE:
      return {
        ...state,
        character: {}
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
