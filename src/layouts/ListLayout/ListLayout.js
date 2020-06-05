import React, { Component } from 'react';
import './ListLayout.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard';

class ListLayout extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    this.fetchList()
  }

  fetchList = async () => {
    const baseUrl = 'https://swapi.dev/api';
    const response = await fetch(`${baseUrl}/${this.props.path}`);
    const data = await response.json();

    this.setState({ list: data.results });
  }

  render() {
    return (
      <div className="list-grid">
        {
          this.state.list.map((item, index) => (
            <ProfileCard
              key={item[this.props.titleKey]}
              title={item[this.props.titleKey]}
              text={item[this.props.textKey]}
              imgSrc={`https://unsplash.it/300/30${index}`}
              linkText = 'Click for Details'
              onButtonClick={() => alert(`I like ${item[this.props.titleKey]}`)}
              linkPath={this.props.linkPath}
              hiddenCarousel
            />
          ))
        }
      </div>
    )
  }
}

export default ListLayout;
