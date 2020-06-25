import React from 'react';
import './App.css';
import PicElement from './components/PicElement';
import ShowWheater from './components/ShowWheater';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    }
  }

setCity = (city) => {
    this.setState({ city: city });
    console.log(this.state.city);
}

  render() {
    return (
      <div>
        {this.state.city == '' && <PicElement setCity={this.setCity}></PicElement>}
        {this.state.city != '' && <ShowWheater city={this.state.city} />}
      </div>
    );
  }
}
