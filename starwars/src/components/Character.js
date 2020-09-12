// Write your Character component here
import React from 'react';
import styled from 'styled-components';
export default function Character (props) {

const { charactersData } = props
if (!charactersData) {
    console.log('Now Loading...')
    return <h1>Loading...</h1>
}


    return (
        charactersData.map( singleCharacter => {
            return (
            <div className='characterContainer'>
            <NameH1>{singleCharacter.name}</NameH1>
            <MainImg src={singleCharacter.image} alt={singleCharacter.species}></MainImg>
            
            <TagH3>Status: {singleCharacter.status}</TagH3>
            <TagH3>Species: {singleCharacter.species}</TagH3>
            
            </div>
        )
    })
    )
}

const NameH1 = styled.h1`
font-family: serif;
font-size: 2rem;
text-align: center;
text-decoration: underline;
`;

const TagH3 = styled.h3`
font-size: 1rem;
font-style: italic;
text-align: center;
`;

const MainImg = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
border: 4px solid black;
`;