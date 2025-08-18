

// function greetPerson(name: string) {
//     return `Hola, ${name}`
// }

// const greetPerson = (name: string) => {
//     return `Hola, ${name}`
// }

const greetPerson = (name: string) => `Hola, ${name}`

const getUser = (uid: string) => 
    ({
        uid: uid,
        username: 'Tony001',
    }) // Cuando se usa parentesis se refiere a un return implicito

console.log(greetPerson('Tony'));

console.log(getUser('XYZ-456'));

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super fuerza',
    },
];

const hero = heroes.find( (h) => h.id === 1 );

console.log(hero?.power?.toUpperCase());
