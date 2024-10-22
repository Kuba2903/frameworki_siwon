
const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami 
let cars = [];
const path = require('path');

fs.readFile('./src/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    console.log(names);
    let content = "const data = [";

    let counter = names.length;

    for(let i = 0; i < counter; i++){
        //losowanie imienia z bilioteki imion
        const randomIndex = Math.floor(Math.random() * names.length);
        const name = names[randomIndex].split(' ');
        const rating = Math.floor(Math.random() * 10) + 1;
        
        // Dodanie obiektu z id i name do content
        content += `{"id": ${i}, "name": "${name[0]}", "date_of_birth": "${name[1]}", "eyes": "${name[2]}", "rating": "${rating}"}, \n`;
    }
    content += "];";
    content += "export default data;";
    //zapis łańcucha do pliku 
    fs.writeFile(path.join(__dirname, 'module-data.js'), content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});



fs.readFile('./src/cars.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    cars = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    console.log(cars);
    let content = "const data = [";

    let counter = cars.length;

    for(let i = 0; i < counter; i++){
        //losowanie imienia z bilioteki imion
        const randomIndex = Math.floor(Math.random() * cars.length);
        const car = cars[randomIndex].split(' ');
        const rating = Math.floor(Math.random() * 10) + 1;

        // Dodanie obiektu z id i name do content
        content += `{"id": ${i}, "marka": "${car[0]}", "rejestracja": "${car[1]}" , "vin": "${car[2]}", "rating": "${rating}"} \n ${i < counter - 1 ? ', ' : ''}`;
    }
    content += "];";
    content += "export default data;";
    //zapis łańcucha do pliku 
    fs.writeFile(path.join(__dirname, 'module-data-cars.js'), content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});
