import {FETCH_WEATHER} from '../actions/fetchWeather';

export default function(state=[],action) {
  switch(action.type)
  {
    case FETCH_WEATHER:
      if (action.payload.data !== undefined)
      {
         return [action.payload.data,...state];
       }
      else {
        alert ("Cannot find weather data for this city");
        return state;
      }
    default :
     return state;
  }
}
