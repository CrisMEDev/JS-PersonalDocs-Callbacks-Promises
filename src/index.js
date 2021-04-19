import { buscarHeroe as buscarHeroeCallback } from './js/callbacks' // Se asigna un alias al metodo en callbacks para que el
                                                                    // intérprete no lo confunda con el de promesas
import { buscarHeroe } from './js/promesas'
import './styles.css';

const heroeId = 'capi';
const heroe2Id = 'iron';
const heroe3Id = 'spider';


// Cuando se empiezan a necesitar más llamas a un callback y se empieza a hacer un multiple anidamiento se denomina
// CALLBACK HELL lo cual a futuro es un 'dolor de cabeza', apaprtir de este problema nacieron las PROMESAS

// buscarHeroe( heroeId,  ( err, heroe ) => {
//     if ( err ) return console.error( err );
    
//     buscarHeroe( heroe2Id, (err, heroe2) => {   // Se uso el nombre heroe2 para evitar problemas con el interprete
//                                                 // ya que no se sabe si se remplazaria con el heroe ya existente
//         if ( err ) return console.error( err );

//         buscarHeroe( heroe3Id, (err, heroe3) => {   // Se uso el nombre heroe2 para evitar problemas con el interprete
//                                                     // ya que no se sabe si se remplazaria con el heroe ya existente
//             if ( err ) return console.error( err );
//             console.log(`Enviando a ${heroe.nombre}, ${heroe2.nombre} y ${heroe3.nombre} a la mision`);
//         });

//     });
// });

buscarHeroe( heroeId ).then( heroe => {     // Esto se ejecutará despues de el log final debido a que pasa a otro hilo de ejecucion
                                            // mientras el programa sigue corriendo la promesa realiza su procedimiento para
                                            // porsteriormente devolver la respuesta
    console.log(`Enviando a ${heroe.nombre} a la mision`);
});

console.log('Fin del programa');
