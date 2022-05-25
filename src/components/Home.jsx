// import React from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../StyleSheets/Home.css'

// export default class Home extends React.Component {
export default class Home extends Component {
  render() {
    return (
      <div className='home-container' >
        <h1>Home</h1>
        <h3>Breaking Bad</h3>
        <Link to="/characters"><button>All Characters</button></Link>
      </div>
    );
  }
}
