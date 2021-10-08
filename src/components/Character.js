// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharStyle = styled.div `
    
    border: 3px solid blue;
    display: flex;
    
    flex-wrap: wrap;
    margin-right: 10px;
    text-align: center;
    align-items: center;
    margin-top :0.5rem;
    margin: auto;
    width: 50%;

    button:hover{
      cursor:pointer
    }

    h2{
      
      text-align:center;
      
    }
    
`

export default function Character({info}) {
  const [visible, setVisible] = React.useState(false);
    return (
        <CharStyle >
        <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
       </button>
       <h2>{info.name}</h2>
      {visible && <div className="style">   
        <iframe className="fram" width="200"
         height="120" src={info.i} 
         title="YouTube video player" 
         frameborder="0" 
        allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media;
        gyroscope; picture-in-picture"
        allowfullscreen></iframe>
            <h3>Gender: {info.gender}</h3>
            <h3>Height: {info.height}</h3>
            <h3>Mass: {info.mass}</h3>
            <h3>Birth Year: {info.birth_year}</h3>
            <h3>Eye Color: {info.eye_color}</h3>
            <h3>Hair Color: {info.hair_color}</h3>
            <h3>Skin Color: {info.skin_color}</h3>
            </div>}
        </CharStyle>
    )
}

