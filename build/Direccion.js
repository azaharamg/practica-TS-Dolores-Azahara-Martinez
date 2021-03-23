"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    toString() {
        return `${this.calle}, ${this.numero}, ${this.piso}, ${this.letra}. ${this.poblacion}, ${this.provincia} (${this.codigoPostal})`;
    }
}
exports.Direccion = Direccion;
//# sourceMappingURL=Direccion.js.map