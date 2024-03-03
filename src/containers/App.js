//import React, { Component } from 'react';
//replace the above code with the new import components
import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


function App() {
  //replace this code with the functional component
  //class App extends Component {
  //constructor() {
  //  super()
  //  this.state = {
  //  robots: [],
  //    searchfield: ''
  //  }
  // }
  //replace the above code with this line below.
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  //  componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ robots: users }))

  //  }
  //replace the above code with the hook useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        setRobots(users)
      });
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  // render() {
  //   const { robots, searchfield } = this.state;
  //eliminate this code don'use with the hooks
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  if (!robots.length) {
    return <h1>Loading</h1>
  } else {
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }

}

export default App;