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
            
          <div class="card" style="width: 30rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${id}. ${name} ${price}€</h5>
                <p class="card-text">${description}</p>
            </div>
           
            </div>
         

        `

    }
})
