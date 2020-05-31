import React, { Component } from 'react';
import './PlanetsPage.css';

// import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ListLayout from '../../layouts/ListLayout/ListLayout';

const PlanetsPage = () => {
  return (
    <ListLayout path="planets" titleKey="name" textKey="terrain" name="Planet"  />
  )
}

// class PlanetsPage extends Component {
//   state = {
//     planets: []
//   }

//   componentDidMount() {
//     this.fetchPlanets();
//   }

//   fetchPlanets = async () => {
//     const baseUrl = 'https://swapi.dev/api';
//     const response = await fetch(`${baseUrl}/planets`);
//     const data = await response.json();

//     this.setState({ planets: data.results })
//   }

//   render() {
//     return (
//       <div className="planets-grid">
//         {
//           this.state.planets.map((planet, index) => (
//             <ProfileCard 
//               title={planet.name}
//               text={`Climate: ${planet.climate}, Terrain: ${planet.terrain}, Population: ${planet.population}`}
//               imgSrc={`https://unsplash.it/300/30${index}`}
//               buttonText="Like Planet"
//               onButtonClick={() => alert(`I like ${planet.name}`)}/>
//           ))
//         }
//       </div>
//     )
//   }
// }

export default PlanetsPage;