
(function(){


    function getEdad() {
     return 100 + 100 + 300;   
    }

    const nombre = 'Fernando';
    const apellido = 'Palomo';
    const edad = 35;

    //const salida = nombre + " " + apellido + " ( " + edad + " )";

    const salida = `
    ${ nombre }
    ${ apellido }
    (${ getEdad() } )`;
    console.log(salida);





})();

