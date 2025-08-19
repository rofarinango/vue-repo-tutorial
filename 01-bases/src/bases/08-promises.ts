// console.log('Inicio');

import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

// new Promise(( resolve, reject )=> {
//     //console.log('Cuerpo de la promesa');
//     setTimeout(() => {
//         // resolve('Mi amigo cumplió');
//         // console.log('Hola');
//         // console.log('Hola');

//         reject('Mi amigo no cumplió');
                
//     }, 1000);
    
// }).then((message) => console.log( message ))
// .catch( errorMessage => console.log(errorMessage))
// .finally(() => console.log('Fin de la promesa'));

// console.log('Fin');

const getHeroByIdAsync = (id: number): Promise<Hero> => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=> {
            const hero = getHeroById(id);
            hero
                ? resolve(hero)
                : reject(`Heroe no encontrado #${id}`);
        }, 1500)
    });
};

getHeroByIdAsync(2)
    .then(hero=> console.log('El nombre es', hero.name))
    .catch(message => alert(message));