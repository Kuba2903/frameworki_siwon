import React, { useState, useReducer } from 'react';
import Bar from './RatingBar';
import AppReducer from '../data/AppReducer';

function PersonProfile ({name, date_of_birth, eyes, rating}) {

    const initialState = { rating: rating, i: 0 };

    const [state,dispatch] = useReducer(AppReducer,initialState);

    // const [newRate,SetRate] = useState(rating);
    
    // const [i, setI] = useState(0); 
    

    // const IncrementRate = () => {
    //     if (i === 0) {
    //         SetRate(10); 
    //         setI(i + 1); 
    //     } else if (i === 1) {
    //         SetRate(0); 
    //         setI(i + 1); 
    //     } else {
    //         SetRate(newRate + 1);

    //         if(newRate === 10){
    //             SetRate(0);
    //         }
    //     }
    // };

    if (!state) {
        return <p>Profile has been deleted.</p>;
    }

    return(
        <>
            <h1>Imię: {name}</h1>
            <p>Data urodzenia: {date_of_birth}</p>
            <p>Kolor oczu: {eyes}</p>
            <p>Rating: {state.rating}</p>
            <Bar rate={state.rating}/>

            <button onClick={() => {
                dispatch({
                    type: "edit",
                        });
                    }}>Edit</button>
            <button onClick={() => {
                console.log(name);
                dispatch({
                    type: "delete",
                        });
                    }
            }>Delete</button>
            <button onClick={() => {
                dispatch({
                    type: "rate"
                        });
                    }}>Rate</button>
        </>
    );
}




export default PersonProfile;