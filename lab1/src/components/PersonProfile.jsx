import React, { useState } from 'react';
import Bar from './RatingBar';

function PersonProfile ({name, date_of_birth, eyes, rating}) {

    const [newRate,SetRate] = useState(rating);
    
    const [i, setI] = useState(0); 
    

    const IncrementRate = () => {
        if (i === 0) {
            SetRate(10); 
            setI(i + 1); 
        } else if (i === 1) {
            SetRate(0); 
            setI(i + 1); 
        } else {
            SetRate(newRate + 1);

            if(newRate == 10){
                SetRate(0);
            }
        }
    };

    return(
        <>
            <h1>Imię: {name}</h1>
            <p>Data urodzenia: {date_of_birth}</p>
            <p>Kolor oczu: {eyes}</p>
            <p>Rating: {newRate}</p>
            <Bar rate={newRate}/>

            <button onClick={Edit}>Edit</button>
            <button onClick={Delete}>Delete</button>
            <button onClick={IncrementRate}>Rate</button>
        </>
    );
}

function Edit(){

}

function Delete(){

}



export default PersonProfile;