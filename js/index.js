const requestURL = '../json/cars.json';

async function fetchCarsJson(){
    const response = await fetch(requestURL);
    const cars = await response.json();
    return cars;
}


fetchCarsJson().then(car => {
    for (let index=0; index < car.cars.length ; index++) {

        let id  = car.cars [index].id;
        let image  = car.cars[index].image;
        let price  = car.cars[index].price;
        let name  = car.cars[index].name;
        let description  = car.cars[index].description;
        
        
        carSection.innerHTML += `
            
            <img src="${image}" alt="">
            <div>id. ${id}</div>
            <p> El precio es ${price}</p>
            <div>info :${description}</div>

        `

    }
})
