import React from "react";
import { connect } from "react-redux";

export function CharactersFav({charactersFav}) {
return (
  <div>
    <h1>Characters Fav</h1>
    {!charactersFav.length && <h4>No fav characters found</h4>}
    {charactersFav.length !==0 && charactersFav.map (fav => {
      return (
        <>
      <div key={fav.name}>
        <h3>{fav.name}</h3>
      </div>
      </>
    )}
    )}
  </div>

  )
}

function mapStateToProps (state) {
  return {
    charactersFav: state.charactersFav
  }
}


export default connect (mapStateToProps, null)(CharactersFav)