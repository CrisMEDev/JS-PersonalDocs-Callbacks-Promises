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


export const buscarHeroe = ( id ) => {      

    const heroe = heroes[id];
    
    return new Promise( ( resolve, reject ) => {    // Esta es la estructura de una promesa, el resolve y reject pueden usarse si es
                                                    // que se encesitan en la promesa, sino solamente no se reciben com oargumentos
        if ( heroe ){
            resolve( heroe );    // Aquí se colocan los argumentos que se quieren regresar a la funcion que llama a la promesa
        } else {
            reject(`No existe un héroe con el id ${ id }`);
        }

    });

}

const promesaLenta = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        resolve('Promesa lenta');
    }, 2000);
});

const promesaMedia = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        resolve('Promesa media');
    }, 1500);
});

const promesaRapida = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        resolve('Promesa rapida');
    }, 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}

