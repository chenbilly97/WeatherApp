import {FETCH_WEATHER} from '../actions/fetchWeather';
var set = [];
export default function(state=[],action) {
  switch(action.type)
  {
    case FETCH_WEATHER:
      if (action.payload.data !== undefined && !set.includes(action.payload.data.city.name))
      {
           set.push(action.payload.data.city.name);
           return [action.payload.data,...state];
       }
      else {
        alert ("Invalid city or city already in table");
        return state;
      }
    default :
     return state;
  }
}
