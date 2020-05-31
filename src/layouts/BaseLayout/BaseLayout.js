import React from 'react';
import { Link } from 'react-router-dom'
import './BaseLayout.css';

const BaseLayout = ({ children }) => (
  <div className="container">
    <h1>Application</h1>
    <p>Welcome to Star Wars Web APp</p>
    <nav>
      <Link to="/">Home</Link>
      <Link to="films">Films</Link>
      <Link to="planets">Planets</Link>
      <Link to="people">People</Link>
    </nav>


    {children}
  
  </div>
)

export default BaseLayout;