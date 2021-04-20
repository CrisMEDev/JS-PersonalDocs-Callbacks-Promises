import { buscarHeroeAsync } from "./promesas";

const heroesIds = [ 'capi', 'iron', 'spider'];

export const obtenerHeroesArr = async () => {

    const heroesArr = [];

    for ( const heroe of heroesIds ){
        // buscarHeroeAsync( heroe )
        // .then( heroe => {heroesArr.push( heroe );});   // Como es una promesa que en el mejor de lso casos resuelve un heroe,
                                                       // se puede asignar a una variable y evitar asignar en el then

        const heroeAsync = await buscarHeroeAsync( heroe );     // await espera a que la promesa se resuelva

        heroesArr.push( heroeAsync );
    }

    return heroesArr;

};

