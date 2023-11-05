import { useState, useEffect } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const fliteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return !robots.length ? (
    <h1 className='tc'>Loading</h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={fliteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
