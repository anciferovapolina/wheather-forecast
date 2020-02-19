import React from 'react';

const listItems = {
  LOC: 'Location',
  TEMP: 'Temperature',
  HUM: 'Humidity',
  COND: 'Condition'
};

class WeatherInfo extends React.Component {
  render() {
    let items;
    if (this.props.resultObj && Object.keys(this.props.resultObj).length && this.props.resultObj?.cod === 200) {
      items = {
        [listItems.LOC]: [this.props.resultObj?.name, this.props.resultObj?.sys.country],
        [listItems.TEMP]: this.props.resultObj?.main.temp,
        [listItems.HUM]: this.props.resultObj?.main.humidity,
        [listItems.COND]: this.props.resultObj?.weather[0].description,
      };
    }

    console.log('this.props.resultObj: ', this.props.resultObj);
    console.log('items: ', items);

    return (
      <div>
        <ul className='weather__info'>
          {items instanceof Object && Object.keys(items).length ? Object.entries(items).map(item =>
            <li key={item[0]} className='weather__key'>
              {item[0]} {item[1]}
            </li>) : <p className='weather__key'>{this.props.resultObj?.message}</p>}
        </ul>
      </div>
    )
  }
}

export default WeatherInfo;
