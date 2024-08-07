const IMAGE_URL = "https://placehold.co/200";

const users = [
    {
        id: 1,
        userName: 'User1',
        description: 'lorem ipsum',
        age: 46,
        favMusic: {
            bands: ['Red Hot Chili Peppers', 'Paramore', 'Three Days Grace', '3 Doors Down']
        }
    },
    {
        id: 2,
        userName: 'User LastName',
        description: 'Lorem lorem lorem',
        age: 23,
        favMusic: {
            bands: ['Alt J', 'The Red Jumpsuit Apparatus', 'Limp Bizkit', 'The Academy Is']
        }
    }
]

function createCard(user) {
    
}
//Selectores
const card = document.getElementById("card-container");
const cardImgContainer = document.getElementById("card-img-container");

//Crear elemento img
const imageElement= document.createElement("img");
imageElement.src = IMAGE_URL;
imageElement.alt = "User profile photo";


//creamos elemento titulo --> card
const cardTitleElement = document.createElement("h3");
cardTitleElement.classList.add("card-title");
const cardAgeElement = document.createElement("p");
const cardDescElement = document.createElement("p");

//Poblar
cardTitleElement.textContent = users.username;
cardAgeElement.textContent = users.age;
cardDescElement.textContent = users.description;

//Renderizar
cardImgContainer.appendChild(imageElement);
card.append(cardTitleElement, cardAgeElement, cardDescElement);