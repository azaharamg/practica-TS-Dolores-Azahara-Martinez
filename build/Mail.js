"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    toString() {
        return `${this.tipo}: ${this.direccion}`;
    }
}
exports.Mail = Mail;
//# sourceMappingURL=Mail.js.map