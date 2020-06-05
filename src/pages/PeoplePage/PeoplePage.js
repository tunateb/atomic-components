import React from 'react';

import ListLayout from '../../layouts/ListLayout/ListLayout'

const PeoplePage = () => (
  <ListLayout path="people" titleKey="name" textKey="birth_year" name="Person" linkPath = "peopledetails" />
)

export default PeoplePage;