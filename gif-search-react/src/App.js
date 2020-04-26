import React, {Component} from 'react';
import Header from './Header';
import './css/main.css';

class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className='search grid'>
          {}
          <input className='input grid-item' placeholder='Type something'/>
        </div>
      </div>
    );
  }
}

export default App;
