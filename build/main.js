"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./Persona");
const Direccion_1 = require("./Direccion");
const Telefono_1 = require("./Telefono");
const Mail_1 = require("./Mail");
const monica = new Persona_1.Persona('Monica', 'Perez Marin', 56, '43859120-D', '1977-07-21', 'rojo', 'Mujer', [new Direccion_1.Direccion('Carrer de Can Serra', 7, 3, 'A', 7001, 'Palma de Mallorca', 'Baleares')], [new Mail_1.Mail('personal', 'monica.marin@example.com')], [new Telefono_1.Telefono('movil', 631476342)], 'Española');
const samantha = new Persona_1.Persona('Samantha', 'Lewis Lewis', 66, '76923753-D', '1987-06-22', 'amarillo', 'Mujer', [new Direccion_1.Direccion('Cranford Street', 293, 2, 'C', 8023, 'Christchurch', 'Canterbury')], [new Mail_1.Mail('profesional', 'samantha.lewis@example.com')], [new Telefono_1.Telefono('movil', 6376024000)], 'Neozelandesa');
const tiago = new Persona_1.Persona('Tiago', 'Ramos Ramos', 56, '07048412-C', '1977-07-20', 'azul', 'Hombre', [new Direccion_1.Direccion('Avenida Paulista', 200, 1, 'B', 1311, 'Sao Paulo', 'State of Sao Paul')], [new Mail_1.Mail('personal', 'tiago.ramos@example.com')], [new Telefono_1.Telefono('movil', 1016152184)], 'Brasileño');
console.log('********* Estos son los 3 registros creados *********');
console.log(monica.mostrarInformacion());
console.log(samantha.mostrarInformacion());
console.log(tiago.mostrarInformacion());
const agenda = [monica, samantha, tiago];
const actualizarUsuario = (dniBuscado, direccion, mail, telefono) => {
    let usuarioBuscado = agenda.find((usuario) => usuario.dni === dniBuscado);
    if (!usuarioBuscado) {
        return;
    }
    usuarioBuscado.agregarDireccion(direccion);
    usuarioBuscado.agregarMail(mail);
    usuarioBuscado.agregarTelefono(telefono);
};
actualizarUsuario('43859120-D', new Direccion_1.Direccion('Avenida Portugal', 2, 1, 'C', 7012, 'Palma de Mallorca', 'Baleares'), new Mail_1.Mail('profesional', 'monica.perez@example-company.com'), new Telefono_1.Telefono('fijo', 971760000));
actualizarUsuario('76923753-D', new Direccion_1.Direccion('Calle de Terol', 26, 4, 'D', 8012, 'Barcelona', 'Barcelona'), new Mail_1.Mail('personal', 'samantha20@example.com'), new Telefono_1.Telefono('trabajo', 932853010));
actualizarUsuario('07048412-C', new Direccion_1.Direccion('Calle Alcalde Sainz de Baranda', 41, 10, 'D', 28009, 'Madrid', 'Madrid'), new Mail_1.Mail('profesional', 'tiago.ramos@example-company.com'), new Telefono_1.Telefono('fijo', 91123123));
console.log('********* Estos son los 3 registros con los cambios realizados ********* ');
console.log(monica.mostrarInformacion());
console.log(samantha.mostrarInformacion());
console.log(tiago.mostrarInformacion());
//# sourceMappingURL=main.js.map