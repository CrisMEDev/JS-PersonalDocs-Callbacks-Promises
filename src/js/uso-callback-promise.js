import { buscarHeroe as buscarHeroeCallback } from './callbacks' // Se asigna un alias al metodo en callbacks para que el
                                                                    // intérprete no lo confunda con el de promesas
import { buscarHeroe } from './promesas'
import './styles.css';

const heroeId = 'capi';
const heroe2Id = 'iron';
const heroe3Id = 'spider';

//                                          --- CALLBACKS ---

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



//                                          --- PROMESAS ---

// buscarHeroe( heroeId ).then( heroe => {     // Esto se ejecutará despues de el log final debido a que pasa a otro hilo de ejecucion
//                                             // mientras el programa sigue corriendo la promesa realiza su procedimiento para
//                                             // porsteriormente devolver la respuesta
        
//     buscarHeroe( heroe2Id ).then( heroe2 => {
//         console.log(`Enviando a ${heroe.nombre}, ${heroe2.nombre} a la mision`);
//     });
// });

// console.log('Fin del programa');


Promise.all([buscarHeroe( heroeId ), buscarHeroe( heroe2Id )]).then( arr => {     // El then recibe un arreglo con las respuestas de cada objeto enviado en
                                                    // el arreglo del all
    
    console.log('Promise.all', arr);
    console.warn('Con array de respuestas');
    console.log(`Enviando a ${arr[0].nombre}, ${arr[1].nombre} a la mision`);

});

Promise.all([buscarHeroe( heroeId ), buscarHeroe( heroe2Id )])
    .then( ([heroe1, heroe2]) => {  // Se usa la desestruccturación de objetos para separar el array en variables independientes

    console.warn('Con desestructuracion');
    console.log(`Enviando a ${heroe1.nombre}, ${heroe2.nombre} a la mision`);

}).catch( err => {      // Apenas encuentra un error se ejecuta el codigo del catch, la promesas ya no se resuelven
                        // por lo tanto el codigo en then nunca se ejecutara
    alert( err );
}).finally( () => {
    console.log('Finally');
});

console.log('Fin del programa');
