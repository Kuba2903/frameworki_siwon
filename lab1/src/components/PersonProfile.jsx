import React from 'react';

const PersonProfile = ({name, date_of_birth, eyes}) => {
    
    return(
        <>
            <h1>Imię: {name}</h1>
            <p>Data urodzenia: {date_of_birth}</p>
            <p>Kolor oczu: {eyes}</p>
        </>
    );
}


export default PersonProfile;