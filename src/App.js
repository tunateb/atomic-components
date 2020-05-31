import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import BaseLayout from './layouts/BaseLayout/BaseLayout';
import HomePage from './pages/HomePage/HomePage';
import FilmsPage from './pages/FilmsPage/FilmsPage';
import PlanetsPage from './pages/PlanetsPage/PlanetsPage'
import PeoplePage from './pages/PeoplePage/PeoplePage';

function App() {
  return (
    <BrowserRouter>

      <BaseLayout>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/films" component={FilmsPage} />
          <Route path="/planets" component={PlanetsPage} />
          <Route path="/people" component={PeoplePage} />
        </Switch>

      </BaseLayout>
      
    </BrowserRouter>
  );
}

export default App;
