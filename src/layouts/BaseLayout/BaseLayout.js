import React from 'react';
import { Link } from 'react-router-dom'
import './BaseLayout.css';


const BaseLayout = ({ children }) => (
  <div className="container">
    <h1>The Star Wars Universe</h1>
    
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="films">Films</Link>
      <Link to="planets">Planets</Link>
      <Link to="people">People</Link>
    </nav>

    {children}
  </div>
);

export default BaseLayout;