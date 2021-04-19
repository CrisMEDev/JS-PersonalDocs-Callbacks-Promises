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

    callback( heroe );

}
