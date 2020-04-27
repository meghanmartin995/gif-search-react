import React, {Component} from 'react';
import Header from './Header';
import './css/main.css';
import loader from './images/loader.svg'

const UserHint = ({loading, hintText}) => (
  <div className="user-hint">
    {loading ?
      <img src={loader} alt="loading" className="block mx-auto" /> :
      hintText
  }</div>
)

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }


  handleChange = event => {
    const {value} = event.target
    this.setState((prevState, props) => ({
      ...prevState,
      searchTerm: value,
      hintText: `Hit enter to search ${value}`
    }))
  }

  handleKeyPress = event => {
    const {value} = event.target
    if (value.length > 2 && event.key === 'Enter'){
      alert(`search for ${value}`);
    }
  }

  render() {
    const { searchTerm } = this.state
    return (
      <div className="page">
        <Header />
        <div className='search grid'>
          {}
          <input
            className='input grid-item'
            placeholder='Type something'
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            value={searchTerm}/>
        </div>
        <UserHint {...this.state}/>
      </div>
    );
  }
}

export default App;
