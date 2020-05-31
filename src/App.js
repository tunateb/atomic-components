import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import BaseLayout from './layouts/BaseLayout/BaseLayout';
import HomePage from './pages/HomePage/HomePage';
import FilmsPage from './pages/FilmsPage/FilmsPage';

function App() {
  return (
    <BrowserRouter>

      <BaseLayout>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/films" component={FilmsPage}/>
        </Switch>

      </BaseLayout>
      
    </BrowserRouter>
  );
}

export default App;
