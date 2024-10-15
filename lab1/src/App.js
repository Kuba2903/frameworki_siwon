//import logo from './logo.svg';
//import './App.css';
import Person from './components/PersonProfile';
import Data from './data/module-data';
import Car from './components/CarProfile';
import CarData from './data/module-data-cars';
import Layout from './layouts/RootLayout';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
