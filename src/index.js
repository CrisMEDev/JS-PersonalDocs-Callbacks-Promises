import { buscarHeroe } from './js/callbacks'
import './styles.css';

const heroeId = 'capi';

buscarHeroe( heroeId,  ( err, heroe ) => {
    if ( err )
        console.error( err );
    else
        console.log( heroe );
});
