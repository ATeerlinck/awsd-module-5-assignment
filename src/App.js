import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';
import CountryNoMui from './components/CountryNoMui';
import NewCountry from './components/NewCountry';
import NewCountryNoMui from './components/NewCountryNoMui';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 2 },
      { id: 2, name: 'China', gold: 3, silver: 2, bronze: 0 },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 3 },
    ]
  };
  handleIncrement = (countryId, type) =>{
    const countriesMutable = [...this.state.countries];
    const country = countriesMutable.findIndex(c => c.id === countryId);
    console.log("hey");
    countriesMutable[country][type] += 1;
    this.setState({countries: countriesMutable});
  };
  handleDecrement = (countryId, type) =>{
    const countriesMutable = [...this.state.countries];
    const country = countriesMutable.findIndex(c => c.id === countryId);
    console.log("yeh");
    countriesMutable[country][type] -= 1;
    this.setState({countries: countriesMutable});
  };
  handleAdd = (name) => {
    const { countries } = this.state;
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    const mutableCountries = countries.concat({ id: id, name: name, gold:0, silver:0, bronze:0 });
    this.setState({ countries:mutableCountries });
  }
  getMedalCount = (medal) =>{
    return this.state.countries.reduce((a, b) => a + b[medal], 0);
  };
  render() { 
    return ( 
      <div className="App">
        <header style= {{display: 'flex', alignItems: 'center', justifyContent: 'center' , flexWrap: 'wrap'}} className="App-header">
          <div>Olypmic Medals</div>
          <Avatar sx={{ bgcolor: '#e2d02f', mx:2}}>{ this.getMedalCount("gold") }</Avatar>
          <Avatar sx={{ bgcolor: '#cacaca', mx:2}}>{ this.getMedalCount("silver") }</Avatar>
          <Avatar sx={{ bgcolor: '#a1671a', mx:2}}>{ this.getMedalCount("bronze") }</Avatar>
        </header>
        <Container fixed={true}>
          <Grid spacing={1} justifyContent="center">
            {this.state.countries.map(country =>
            <Grid item key={ country.id }>
              <Country 
              country={ country }
              onIncrement={ this.handleIncrement } 
              onDecrement={ this.handleDecrement } />
            </Grid>
            )}
          </Grid>
          <NewCountry onAdd={this.handleAdd} />
        </Container>
        {this.state.countries.map(country =>
          <CountryNoMui 
            key={ country.id } 
            country={ country }
            onIncrement={ this.handleIncrement } 
            onDecrement={ this.handleDecrement } />
        )}
        <NewCountryNoMui onAdd={ this.handleAdd } />
      </div>
     );
  }
}

export default App;
