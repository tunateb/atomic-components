import React from 'react';
import './PlanetsPage.css';

import ListLayout from '../../layouts/ListLayout/ListLayout';

const PlanetsPage = () => {
  return (
    <ListLayout path="planets" titleKey="name" textKey="terrain" name="Planet"  />
  )
}

export default PlanetsPage;