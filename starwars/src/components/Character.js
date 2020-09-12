// Write your Character component here
import React from "react";
import styled from "styled-components";
export default function Character(props) {
  const { charactersData } = props;
  if (!charactersData) {
    console.log("Now Loading...");
    return <h1>Loading...</h1>;
  }

  return charactersData.map((singleCharacter) => {
    return (
      <StyledDiv className="characterContainer">
        <h1>{singleCharacter.name}</h1>
        <img src={singleCharacter.image} alt={singleCharacter.species}></img>

        <h3>Status: {singleCharacter.status}</h3>
        <h3>Species: {singleCharacter.species}</h3>
      </StyledDiv>
    );
  });
}

const StyledDiv = styled.div`
  h1 {
    font-family: serif;
    font-size: 2rem;
    text-align: center;
    text-decoration: underline;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 4px solid black;
  }

  h3 {
    font-size: 1rem;
    font-style: italic;
    text-align: center;
  }
`;

