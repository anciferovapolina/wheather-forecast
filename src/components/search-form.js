import React from 'react';
import WeatherInfo from './weather-info';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueCity: '',
      valueCountry: ''
    };
  }
  render() {
    return (
      <div className='col-xs-7 form-container'>
        <form>
          <input name='city' type='text' placeholder='city'/>
          <input name='country' type='text' placeholder='country'/>
          <button type='submit'>Get Weather</button>
        </form>

        <WeatherInfo/>
      </div>
    );
  }
}

export default SearchForm;
