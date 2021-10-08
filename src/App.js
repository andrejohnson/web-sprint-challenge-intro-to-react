import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [visible, setVisible] = React.useState(false);
  const [charactersInfo, setCharactersInfo] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
     .then(res => {
       setCharactersInfo(res.data);

     }).catch(err => {
       console.error(err);
     })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        charactersInfo.map(character => {

       


          return <Character key = {character.id} info = {character}/>
        })
      }
    </div>
  );
}

export default App;
