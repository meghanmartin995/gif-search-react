import React, {Component} from 'react';
import Header from './Header';
import './css/main.css';

class App extends Component {
  handleChange = event => {
    const {value} = event.target
    if (value.length > 2) {
      console.log("search term")
    }
  }

  render() {
    return (
      <div className="page">
        <Header />
        <div className='search grid'>
          {}
          <input className='input grid-item' placeholder='Type something' onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default App;
