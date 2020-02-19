import React from 'react';
import WeatherInfo from './weather-info';

const apiKey = "8ddceeacaf8b95fe943c88fc8389dee0";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valueCity: '',
      valueCountry: '',
      resultObj: null
    };
  }

  handleChange(value, name) {
    this.setState({
      [name]: value
    });
  }

   handleSubmit(event) {
    event.preventDefault();
    fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${this.state.valueCity},${this.state.valueCountry}&appid=${apiKey}&units=metric`)
      .then(
        response  => response.json(),
      )
      .then(
        response => this.setState({
          resultObj: response
        })
      )
      .catch(
        error => console.log(error)
      );

    console.log('handleSubmit: ', this.state.resultObj);
  }

  render() {
    return (
      <div className='col-xs-7 form-container'>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input name='valueCity'
                 type='text'
                 placeholder='city'
                 value={this.state.valueCity}
                 onChange={(event) => this.handleChange(event.target.value, event.target.name)}/>
          <input name='valueCountry'
                 type='text'
                 placeholder='country'
                 value={this.state.valueCountry}
                 onChange={(event) => this.handleChange(event.target.value, event.target.name)}/>
          <button type='submit'>Get Weather</button>
        </form>
        <p style={{'color': 'white'}}>form: {this.state.valueCity} {this.state.valueCountry}</p>
        <WeatherInfo resultObj={this.state.resultObj}/>
      </div>
    );
  }
}

export default SearchForm;
