import React , {Component} from 'react';
import '../css/weatherTable.css'
import  {connect} from 'react-redux';

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
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{temp}</td>
        <td>{humidities}</td>
        <td>{presure}</td>
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
