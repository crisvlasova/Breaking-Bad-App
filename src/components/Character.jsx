import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacter, addCharacterFav, clearState } from "../redux/actions";
import '../StyleSheets/Character.css'

export function Character({character, getCharacter, addCharacterFav, clearState}) {

  const params = useParams()
  useEffect(() =>{ 
  getCharacter(params.id);
  return () => {clearState()}
  }, [params])

  function handleClick (e) {
    e.preventDefault();
    addCharacterFav(character)
  }

  console.log(character)
  return (
      <div key={character.char_id} className='character-details'>
           <h1>{character.name}</h1>
           <h3>Nickname "{character.nickname}"</h3>
           <div className='img-container'>
            <img src={character.img} alt={character.name} />
            <div className='detail-container'>
              <h4>Birthday: {character.birthday}</h4>
              <h4>Occupation-s: {character.occupation}</h4>
              <h4>Status: {character.status}</h4>
              <button onClick={(e)=>handleClick(e)}>Add Fav</button>
            </div>
           </div>
      </div>
  );
}

function mapStateToProps(state) {
  return {
    character : state.character
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacter: (id) => dispatch(getCharacter(id)),
    addCharacterFav: (name) => dispatch(addCharacterFav(name)),
    clearState: () => dispatch(clearState())
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Character)