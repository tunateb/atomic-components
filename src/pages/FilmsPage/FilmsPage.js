import React, { Component } from 'react';
import './FilmsPage.css'

import ProfileCard from '../../components/ProfileCard/ProfileCard'

class FilmsPage extends Component {
  state = {
    films: []
  }

  componentDidMount() {
    this.fetchFilms();
  }

  fetchFilms = async () => {
    const baseUrl = 'https://swapi.dev/api'
    const response = await fetch(`${baseUrl}/films`);
    const data = await response.json();

    this.setState({ films: data.results })
  }

  render() {
    return (
      <div className="photos-grid">
        {
          this.state.films.map(film => (
            <ProfileCard 
              key={film.title}
              title={film.title} 
              text={film.opening_crawl} 
              imgSrc={`https://unsplash.it/300/30${film.episode_id}`} 
              buttonText="Like!"
              onButtonClick={() => alert(`I like ${film.title}`)} />
          ))
        }

      </div>
    )
  }
}

export default FilmsPage;