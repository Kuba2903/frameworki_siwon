import Person from '../../components/PersonProfile';
import Data from '../../data/module-data';

function Lab1(){

    return(
        <>

        <div>
        {Data.map((person) => (
            <Person
              key = {person.id}
              name = {person.name}
              date_of_birth = {person.date_of_birth}
              eyes = {person.eyes}
              rating={person.rating}
              
            />
        ))}
        </div>
        </>
    )
}

export default Lab1;