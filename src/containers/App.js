import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchContent: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(robots => this.setState({ robots: robots}));
  }
  
  update = (event) => {
    this.setState({searchContent: event.target.value});
  }

  render () {
    const { robots, searchContent } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchContent.toLowerCase());
    })

    return (
      robots.length
      ? (<div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBar update={this.update}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>)
      : <h1 className="tc mt5">Loading</h1>
    );
  }   
}
export default App;
