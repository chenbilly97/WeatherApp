import React ,{Component} from 'react';
import  '../css/searchbar.css'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import fetchWeather from '../actions/fetchWeather';

class SearchBar extends Component {
  constructor (props){
    super(props);
    this.state = ({term:''});
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    event.preventDefault();
    this.setState({term:event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }

  render(){
    return (

      <div className="search_bar col-md-8">
       <form onSubmit={this.onFormSubmit} className="input-group searchForm">
         <input
         placeholder="Get a five-day forcast in your favoriate city"
         className="form-control"
         value={this.state.term}
         onChange={this.onInputChange}
         />
        <div className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
       </div>
         </form>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch)
{
  return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps) (SearchBar);
