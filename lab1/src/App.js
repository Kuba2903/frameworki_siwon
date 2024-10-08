import logo from './logo.svg';
import './App.css';
import Person from './PersonProfile';
import Data from './module-data';
import Car from './CarProfile';
import CarData from './module-data-cars';

function App() {
  return (
    <div className="App">

      <div>
      {Data.map((person) => (
          <Person
            key = {person.id}
            name = {person.name}
            date_of_birth = {person.date_of_birth}
            eyes = {person.eyes}
          />

      ))}
      </div>

      <div>
        {CarData.map((car) =>(
            <Car 
            key={car.id}
            marka={car.marka}
            rejestracja={car.rejestracja}
            vin={car.vin}
            />
        ))}

      </div>
      
    </div>
  );
}

export default App;
