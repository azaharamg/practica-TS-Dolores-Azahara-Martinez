"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    toString() {
        return `${this.tipo}: ${this.numero}`;
    }
}
exports.Telefono = Telefono;
//# sourceMappingURL=Telefono.js.map