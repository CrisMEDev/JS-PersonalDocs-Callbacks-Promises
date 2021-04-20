import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = [ 'capi', 'iron', 'spider'];

const heroesPromesas = heroesIds.map( buscarHeroe );
// const heroesPromesas = heroesIds.map( id => buscarHeroe(id) );

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

export const obtenerHeroeAwait = async( id ) => {

    try{
        const heroe = await buscarHeroeAsync( id ); // Ocurre un error aqui lo que ocasiona que a heroe no se le asigne nada
                                                    // salta al catch

        return heroe;
    }
    catch( err ){                                   // Lo que sea que se retorne en este catch pasara como argumento a quien llamo
                                                    // obtener heroe await, por defecto sera un undefined
        console.log('CATCH ERROR en el await');
        console.log( err );

        return {
            nombre: 'Sin nombre',
            poder:  'Sin poder',
        }

        // throw err;  // Si se devuelve este error, será atrapado por el catch que llamo a esta promesa en el index
    }


}

export const heroesCiclo = async() => {
    console.time('HeroesCiclo');

    // Este for es lo mismo que las 2 lineas comentadas debajo
    for await ( const heroe of heroesPromesas ){
        console.log(heroe);
    }
    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log(heroe) );


    // heroesPromesas.forEach( async(promise) => console.log( await promise ) );   // Este codigo se ejecuta cuando se terminan de
                                                                                // ejecutar todas las promesas pero se sigue
                                                                                // el codigo principal de la funcion

    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async(id) => {
    if ( (await buscarHeroeAsync(id))['nombre'] === 'Ironman' ){    // lo mismo que: (await buscarHeroeAsync(id)).nombre
        console.log('Es el mejor de todos');
    } else {
        console.log('Naaaaaa');
    }
}

