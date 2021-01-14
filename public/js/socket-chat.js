var socket = io();

//Variable para leer parametros que vienen del navegador 
var params = new URLSearchParams(window.location.search);

//Validacion si en la URL no viene la variable usuario
if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y sala son necesarios');
};

//Variable para almacenar le nombre del usario 
var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};
socket.on('connect', function() {
    console.log('Conectado al servidor');
    //Con estainformacion el servidor sabe que usuario se conecto al chat
    socket.emit('entrarChat', usuario, function(resp) {
        console.log('Usuarios Conectados:', resp);
    });

});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
/*socket.emit('crearMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});*/

// Escuchar información
socket.on('crearMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});

//Escuchar cuando un usuario ingresa al chat
socket.on('listaPersona', function(personas) {
    console.log(personas);
});

//Mensajes Privados
socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje Privado: ', mensaje);
});