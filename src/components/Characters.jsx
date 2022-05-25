import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCharacters, addCharacterFav } from "../redux/actions";
import '../StyleSheets/Characters.css'

export function Characters({getAllCharacters, allCharacters}) {

  useEffect (() =>{
  getAllCharacters()
  },[])

return (
    <div className='characters-container'>
      <h1>BREAKING BAD</h1>
      <h2>Personajes:</h2>

      <div className='all-characters'>
        {allCharacters && 
        allCharacters.map(character => 
        (
          <div className='character-card'>
            <Link to={`/characters/${character.char_id}`}>
              <h4>{character.name}</h4>
              <p>Alias {character.nickname}</p>
            <img className='character-img' src={character.img} alt={character.name}/>
            </Link>
            <br/>
          </div>
        )  
        )
        }
      </div>
    </div>
  );
}

function mapStateToProps (state) {
  return {
    allCharacters: state.allCharacters
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getAllCharacters: () => dispatch(getAllCharacters()),
    addCharacterFav: (name) => dispatch(addCharacterFav(name))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Characters)