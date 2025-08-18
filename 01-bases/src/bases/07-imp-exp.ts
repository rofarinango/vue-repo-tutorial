import heroes, { owners } from '../data/heroes';

console.log( owners, heroes );

const getHeroById = ( id: number ) => {
    return heroes.find( hero => hero.id === id ) ?? {};
}

console.log(getHeroById(1));

const getHeroesByOwner = ( owner: string) => {
    return heroes.filter( hero => hero.owner === owner) ?? {};
}

console.log(getHeroesByOwner('DC'));