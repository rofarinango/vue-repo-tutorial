console.log('Inicio');

new Promise(( resolve, reject )=> {
    //console.log('Cuerpo de la promesa');
    setTimeout(() => {
        // resolve('Mi amigo cumplió');
        // console.log('Hola');
        // console.log('Hola');

        reject('Mi amigo no cumplió');
                
    }, 1000);
    
}).then((message) => console.log( message ))
.catch( errorMessage => console.log(errorMessage))
.finally(() => console.log('Fin de la promesa'));

console.log('Fin');
