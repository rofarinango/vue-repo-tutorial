
export const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 51234,
        lat: 14.123123,
        lng: 34.123123
    }
}; // as const;

// En js todos los objectos pasan por referencia 

// const person2 = person;

// const person2 = {... person, address: {...person.address}}; //Operador spread, crea una copia del objeto

const person2 = structuredClone(person);
person2.lastName = 'Parker';
person2.address.city = 'LA'

console.log(person);
console.log(person2);

