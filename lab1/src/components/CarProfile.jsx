import React from 'react';


function CarProfile({marka, rejestracja, vin}){
    return(
        <>
        <h1>Marka {marka}</h1>
        <p>Rejestracja {rejestracja}</p>
        <p>Numer vin {vin}</p>
        </>
    );
}


export default CarProfile;