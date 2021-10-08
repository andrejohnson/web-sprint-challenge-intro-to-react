// Write your Character component here
import React, { useState, useEffect } from "react"
import reactDom from "react-dom"
import axios from "axios"
import { rest } from "msw";
import { handlers, data } from "../mocks/handlers";




const Character  = () => {

  const [strName, setSrtName] = useState('')

    useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(rp =>{
      console.log(rp.data.films, 'start');
      setSrtName(rp.data.films, console.log('mid'))
      console.log(rp.data.films, 'end');
    })
    .catch(err =>{
      console.log(err);
    })
  
  }, [])
 
return(
  <div className ='name'>
  <h1>{strName}</h1>
</div>
)


}

export default Character;