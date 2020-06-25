import React from 'react';
import './PicElement.css';

export default class PicElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCityName: '',
        }
    }

    updateNewCityName(newCityName) {
        this.setState({ newCityName: newCityName });
    }

    render() {
        const setCity = this.props.setCity; 
        return (
            <div>
                <div className="background-pic-container">
                    <img src="./images/wheater.jpg"></img>
                </div>

                <div className="search-container">
                    <h1>Wetter APP</h1>
                    <input value={this.state.newCityName} onChange={(event) => this.updateNewCityName(event.target.value)} placeholder="Stadt"></input>
                    <button onClick={() => setCity(this.state.newCityName)}>OK</button>
                </div>
            </div>
        );
    }
}

