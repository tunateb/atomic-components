import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import BaseLayout from './layouts/BaseLayout/BaseLayout';
import HomePage from './pages/HomePage/HomePage';
import FilmsPage from './pages/FilmsPage/FilmsPage';
import PlanetsPage from './pages/PlanetsPage/PlanetsPage'
import PeoplePage from './pages/PeoplePage/PeoplePage';
import FilmDetailsPage from './pages/FilmDetailsPage/FilmDetailsPage';
import PeopleDetailsPage from './pages/PeopleDetailsPage/PeopleDetailsPage';
import PlanetDetailsPage from './pages/PlanetDetailsPage/PlanetDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/films" component={FilmsPage} />
          <Route path="/planets" component={PlanetsPage} />
          <Route path="/people" component={PeoplePage} />
          <Route path="/filmdetails" component={FilmDetailsPage} />
          <Route path="/peopledetails" component={PeopleDetailsPage} />
          <Route path="/planetdetails" component={PlanetDetailsPage} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
