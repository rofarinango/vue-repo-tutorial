interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
} // Las interfaces sirven para definir como se ven los objetos

export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    // power: 'money',
}

const {age, name, codeName, power = 'No tiene poder'} = person; // Puede ser un Objeto o un Array


console.log({age, name, codeName, power});

// console.log(person.name);
// console.log(person.age);
// console.log(person.codeName);

// console.log({
//     name: person.name,
//     age: person.age,
//     codeName: person.codeName,
// });

interface CreateHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

const createHero = ({name, age, codeName, power}: CreateHeroArgs) => ({
    id: 123123,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
});

console.log(createHero(person));
