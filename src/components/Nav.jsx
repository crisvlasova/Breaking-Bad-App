import React from "react";
import { Link } from "react-router-dom";
import '../StyleSheets/Nav.css'

const Nav = () => {
  return (
    <nav className='navbar'>
      <Link to={"/"}><h3 className='nav-component'>Home</h3></Link>
      <Link to={"/characters"}><h3 className='nav-component'>Characters</h3></Link>
      <Link to={"/favs"}><h3 className='nav-component'>Favourites</h3></Link>
    </nav>
  );
};

export default Nav;
