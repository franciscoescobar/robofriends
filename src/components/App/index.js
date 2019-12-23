import React, {useState, useEffect} from 'react';
import CardList from '../CardList';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';
import ErrorBoundry from '../ErrorBoundry';

import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState(list);
  const [loading, setLoading] = useState(false);
  const onSearchChange = (event) => {
    setSearchText(event.target.value);
  }

  useEffect(() => {
    setFilteredList(list.filter(robot => robot.name.toLowerCase().includes(searchText.toLowerCase())));
  }, [searchText]);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setList(users); setFilteredList(users); setLoading(false);});
  }, []);
  return (
    
    <div className="tc">
      <h1 className="f1" >Robofriends</h1>
      <SearchBox onSearchChange={onSearchChange} text={searchText}></SearchBox>
      {
        loading ? 
        <h1>Loading...</h1> : (
        <Scroll>
          <ErrorBoundry>
            <CardList 
              list={filteredList}>
            </CardList>
          </ErrorBoundry>
        </Scroll>
        )
      }
      
    </div>
    
  );
}

export default App;
