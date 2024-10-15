import { useParams } from 'react-router-dom';
import Person from '../../components/PersonProfile';
import Data from '../../data/module-data';
import NotFound from "./NotFound";

function Lab2(){
    const { id } = useParams();
    let person = Data.find(element => element.id == id);

    // Data.forEach(element => {
    //     if(element.id == id){
    //         person = element;
    //     }
    // });
    if(person != null){
        return(
            <>
            <Person
            key={person.id}
            name={person.name}
            date_of_birth={person.date_of_birth}
            eyes={person.eyes}
            />
            </>
        )
    }else{
        return(
            <>
            <NotFound/>
            </>
        )
    }
    
}

export default Lab2;