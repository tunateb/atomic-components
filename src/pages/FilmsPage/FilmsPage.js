import React from 'react';
import './FilmsPage.css'

import ListLayout from '../../layouts/ListLayout/ListLayout';

const FilmsPage = () => (
  <ListLayout path="films" titleKey="title" textKey="opening_crawl" name="Film" linkPath = "filmdetails" />
)

export default FilmsPage;