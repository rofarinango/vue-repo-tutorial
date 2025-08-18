

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

console.log(getUser('XYZ-456'));
