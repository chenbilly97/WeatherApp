import React, { Component } from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.css';
import SearchBar from './containers/searchBar';
import WeatherList from './containers/weather_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <h1 className="App-title">Weather Application</h1>
        </header>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
