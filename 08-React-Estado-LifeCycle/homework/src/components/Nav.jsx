import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-light bg-dark">
     <div className="container">
       <a className="navbar-brand" href="/">
         <img src={Logo} alt="image not found" width="30" height="24"/>
       </a>
       <SearchBar onSearch={onSearch} />
     </div>
    </nav>
  );
};

export default Nav;
