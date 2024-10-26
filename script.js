const dataTemplate = document.querySelector('.data-template');
const container = document.querySelector('.container');



fetch('https://jsonplaceholder.org/users')
.then(res => res.json())
.then(data => {
    data.map(user =>{
        const card = dataTemplate.content.cloneNode(true).children[0];
        const name = card.querySelector('.name');
        const email = card.querySelector('.email');
        name.textContent = user.firstName;
        email.textContent = user.email;
        container.append(card);
        
    })
})
.catch(error => console.log(error));