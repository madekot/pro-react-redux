// @ts-nocheck
import React, { Component } from 'react';

import './app.css';
import Header from '../header';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record } from '../Item-details/item-details';

export default class App extends Component {
  
  swapiService = new SwapiService()

  state = {
    showRandomPlanet: true,
    hasRenderError: false,
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };  

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
  }

  componentDidCatch() {
    this.setState({hasRenderError: true})
  }
  
  render() {
    const {
      getPerson, 
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    if (this.state.hasRenderError) {
      return <ErrorIndicator />
    }

    const persenDetails = (
      <ItemDetails 
        itemId="11"
        getData={getPerson}
        getImageUrl={getPersonImage}>              
        <Record field={"gender"} label={"Gender:"} />
        <Record field={"birthYear"} label={"Birth Year:"} />
        <Record field={"eyeColor"} label={"Eye Color:"} />
      </ItemDetails>
    )

    const starhipDetails = (
      <ItemDetails 
        itemId="5"
        getData={getStarship}
        getImageUrl={getStarshipImage}>
          <Record field={"model"} label={"Model:"} />
          <Record field={"length"} label={"Length:"} />
          <Record field={"costInCredits"} label={"Cost:"} />          
      </ItemDetails>
    )
    
    return (
      <ErrorBoundry>
        <Header />
        <Row left={persenDetails} right={starhipDetails}/>
        {/* <RandomPlanet /> */}
        {/* <ErrorButton /> */}
        {/* <PeoplePage /> */}
      </ErrorBoundry>
    )
  };
};