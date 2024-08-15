const users = [
    {
        id: 1,
        userName: 'Kurt',
        imageUrl: "https://placehold.co/400",
        description: 'lorem ipsum',
        age: 46,
        favMusic: {
            bands: ['Red Hot Chili Peppers', 'Paramore', 'Three Days Grace', '3 Doors Down']
        }
    },
    {
        id: 2,
        userName: 'Morrison',
        imageUrl: "https://placehold.co/400",
        description: 'Lorem lorem lorem',
        age: 23,
        favMusic: {
            bands: ['Alt J', 'The Red Jumpsuit Apparatus', 'Limp Bizkit', 'The Academy Is']
        }
    }
]

function createCard(user) {
    const card = document.createElement('div');
    card.className= 'card';
    

const img= document.createElement("img");
img.src= user.imageUrl;
img.alt= user.userName;

const title = document.createElement("h2");
title.textContent = `${user.userName} - Nombre`;
title.classList.add("card-title");

const age = document.createElement("p");
age.textContent = `Edad: ${user.age}`;;

const id= document.createElement('h4');
id.textContent = ` ID ${user.id}`;

const description = document.createElement('p');
description.textContent= user.description;

const bandas = document.createElement('p');
bandas.textContent = ` Música favorita: ${user.favMusic.bands.join (',')}`;


card.appendChilds(img, title, age, id, description, bandas);

return card;
}

document.addEventListener('DOMContentLoaded', ()=> {
    const container = document.getElementById('card-container');
    users.forEach(user => {
        const card = createCard(user);
        container.appendChild(card)
});


});
