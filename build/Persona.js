"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this._dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this.notas = notas;
    }
    get dni() {
        return this._dni;
    }
    set direcciones(direccion) {
        this._direcciones = direccion;
    }
    set mails(mail) {
        this._mails = mail;
    }
    set telefonos(telefono) {
        this._telefonos = telefono;
    }
    mostrarInformacion() {
        return `Los datos personales de ${this.nombre} ${this.apellidos} son:\nEdad:${this.edad}\nDNI:${this._dni}\nCumpleaños:${this.cumpleaños}\nColor Favorito:${this.colorFavorito}\nSexo:${this.sexo}\nDirecciones:\n ${this._direcciones}\nMails:\n ${this._mails}\nTeléfonos:\n ${this._telefonos}\nNotas:\n${this.notas}`;
    }
}
exports.Persona = Persona;
//# sourceMappingURL=Persona.js.map