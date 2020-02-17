import React from 'react';

class WeatherInfo extends React.Component {
  render() {
    console.log('this.props.resultObj: ', this.props.resultObj);
    return (
      <div className='weather__info'>
        <p className='weather__key'>p<span className='weather__value'>{this.props.resultObj?.name}</span></p>
      </div>
    )
  }
}

export default WeatherInfo;
