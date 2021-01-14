//Clase que se va a encargar de todos los usuarios conectados
class Usuarios {
    //Inicializa el listado de personas que de contecten al chat
    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        //Se crea un objeto que tiene ID y Nombre
        let persona = { id, nombre, sala };
        //agregar personas al arreglo de "personas"
        this.personas.push(persona);

        //retornar a todas las personas que se encuentran en el chat
        return this.personas;
    };

    //Obtener informacion de una persona en particular a traves del ID
    getPersona(id) {
        //Se agrega [0] para que traiga solo un unico registro
        let persona = this.personas.filter(persona => {
            return persona.id === id
        })[0];
        //Si no encuentra ningun valor, retorna "undefined"
        return persona;
    };

    //Metodo para obtener a todas las personas
    getPersonas() {
        return this.personas;
    };

    //Metodo para obtener las personas por sala
    getPersonaPorSala(sala) {
        let personasEnSala = this.personas.filter((persona) => {
            return persona.sala === sala
        });
        return personasEnSala;
    };

    //Eliminar a personas del chat por desconexion 
    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);
        //Retorna a todas las personas cuyo id, es distinto al recibido por parametro
        this.personas = this.personas.filter(persona => {
            return persona.id != id
        });

        return personaBorrada;
    };
};

module.exports = {
    Usuarios
}