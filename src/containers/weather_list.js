import React , {Component} from 'react';
import '../css/weatherTable.css'
import  {connect} from 'react-redux';
import cloudIcon from '../assets/cloud.png';
import clearIncon from '../assets/clear.png';
import snowIcon from '../assets/snow.jpeg';
import rainIcon from '../assets/rain.ico';

class WeatherList extends Component {
  constructor (props){
    super(props);
    this.state = ({list:[]});
  }

   getWeatherElement (city)
  {
    const name = city.city.name;
    const currentWeatherData = city.list[0];
    const temp = currentWeatherData.main.temp;
    const humidities = currentWeatherData.main.humidity;
    const presure = currentWeatherData.main.pressure;
    const condition = currentWeatherData.weather[0].main;
    var icon = '';

    switch (condition)
    {
      case 'Clouds':
        icon = cloudIcon;
        break;
      case 'Clear':
        icon = clearIncon;
        break;
      case 'Snow':
        icon = snowIcon;
        break;
      case 'Rain':
          icon = rainIcon;
          break;
      default:
         icon ='';
         break;
    }
    return (
      <tr key={name}>
        <td>{name}</td>
        <td> <img src={icon} className="image" alt=""></img></td>
        <td>{temp} K</td>
        <td>{humidities} %</td>
        <td>{presure} hPa</td>
      </tr>
    );
  }

  render () {
    return (
      <div className="weatherTable">
        <table className="table">
        <thead>
          <tr>
            <th>City Name</th>
            <th>Condition</th>
            <th>Temperature (K)</th>
            <th>Humidity (%)</th>
            <th>Pressure (hPa)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.getWeatherElement)}
        </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({weather})
{
  return {weather};
}

export default connect (mapStateToProps) (WeatherList);
