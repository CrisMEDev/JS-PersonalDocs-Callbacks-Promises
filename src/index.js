import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';

// promesaLenta.then( console.log );
// promesaMedia.then( mensaje => console.log( mensaje ) ); // Lo mismo que la linea inferior y superior
// promesaRapida.then( console.log );

// Promise.race permite ejecutar varias promesas en conjunto y obtener el mensaje de la promesa que se resulve primero
// para el race no importa si alguna falla, ejecutara la promesa que termine primero aun cuando tenga un error 

Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
    .then( mensaje => { console.log(mensaje); })
    .catch( console.warn );
