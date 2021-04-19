const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder:  'Aguantar inyeccciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder:  'Absurda cantidada de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder:  'La mejor reacción alérgica a las picaduras de araña'
    },
}

export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    if ( heroe ){
        callback( null, heroe );    // Se manda null indicando que como el primer argumento es un error no lo presento al
                                    // realizar la búsqueda en el callback
    }
    else{
        callback( `No existe un héroe con el id ${ id }` );
    }


}
