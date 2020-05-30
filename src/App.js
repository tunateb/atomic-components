import React from 'react';
import './App.css';

import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {
  return (
    <div className="container">
      <h1>Application</h1>

      <div className="grid">
        <ProfileCard
          title="My Profile"
          text="I am 32 years old frontend developer from Turkey."
          imgSrc="https://via.placeholder.com/600/24f355"
          buttonText="Like me!"
          onButtonClick={() => alert('I lıke you!')}
        />
      </div>
    </div>
  );
}

export default App;
