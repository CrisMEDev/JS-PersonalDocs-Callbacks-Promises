import { buscarHeroeAsync } from "./promesas";

const heroesIds = [ 'capi', 'iron', 'spider'];

export const obtenerHeroesArr = async () => {

    return await Promise.all( heroesIds.map( buscarHeroeAsync ) );      // Esto es la forma corta de hacerlo a como se hace en las 
                                                                        // lineas 10 a 21

    const heroesArr = [];

    for ( const heroe of heroesIds ){
        // buscarHeroeAsync( heroe )
        // .then( heroe => {heroesArr.push( heroe );});   // Como es una promesa que en el mejor de lso casos resuelve un heroe,
                                                       // se puede asignar a una variable y evitar asignar en el then

        heroesArr.push( buscarHeroeAsync( heroe ) );

    }

    return await Promise.all(heroesArr);

};

