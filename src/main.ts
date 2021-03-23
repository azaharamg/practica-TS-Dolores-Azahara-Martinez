import { Persona } from './Persona';
import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';

const monica: Persona = new Persona(
  'Monica',
  'Perez Marin',
  56,
  '43859120-D',
  '1977-07-21',
  'rojo',
  'Mujer',
  [new Direccion('Carrer de Can Serra', 7, 3, 'A', 7001, 'Palma de Mallorca', 'Baleares')],
  [new Mail('personal', 'monica.marin@example.com')],
  [new Telefono('movil', 631476342)],
  'Española'
);

const samantha: Persona = new Persona(
  'Samantha',
  'Lewis Lewis',
  66,
  '76923753-D',
  '1987-06-22',
  'amarillo',
  'Mujer',
  [new Direccion('Cranford Street', 293, 2, 'C', 8023, 'Christchurch', 'Canterbury')],
  [new Mail('profesional', 'samantha.lewis@example.com')],
  [new Telefono('movil', 6376024000)],
  'Neozelandesa'
);

const tiago: Persona = new Persona(
  'Tiago',
  'Ramos Ramos',
  56,
  '07048412-C',
  '1977-07-20',
  'azul',
  'Hombre',
  [new Direccion('Avenida Paulista', 200, 1, 'B', 1311, 'Sao Paulo', 'State of Sao Paul')],
  [new Mail('personal', 'tiago.ramos@example.com')],
  [new Telefono('movil', 1016152184)],
  'Brasileño'
);

console.log('********* Estos son los 3 registros creados *********');
console.log(monica.mostrarInformacion());
console.log(samantha.mostrarInformacion());
console.log(tiago.mostrarInformacion());

const agenda = [monica, samantha, tiago];

const actualizarUsuario = (dniBuscado: string, direccion: Direccion, mail: Mail, telefono: Telefono): void => {
  // Realizar la búsqueda por DNI
  let usuarioBuscado = agenda.find((usuario) => usuario.dni === dniBuscado);

  if (!usuarioBuscado) {
    return;
  }

  // Añadir una nueva dirección
  usuarioBuscado.agregarDireccion(direccion);
  // Añadir un nuevo mail
  usuarioBuscado.agregarMail(mail);
  // Añadir un nuevo télefono
  usuarioBuscado.agregarTelefono(telefono);
};

actualizarUsuario(
  '43859120-D',
  new Direccion('Avenida Portugal', 2, 1, 'C', 7012, 'Palma de Mallorca', 'Baleares'),
  new Mail('profesional', 'monica.perez@example-company.com'),
  new Telefono('fijo', 971760000)
);

actualizarUsuario(
  '76923753-D',
  new Direccion('Calle de Terol', 26, 4, 'D', 8012, 'Barcelona', 'Barcelona'),
  new Mail('personal', 'samantha20@example.com'),
  new Telefono('trabajo', 932853010)
);

actualizarUsuario(
  '07048412-C',
  new Direccion('Calle Alcalde Sainz de Baranda', 41, 10, 'D', 28009, 'Madrid', 'Madrid'),
  new Mail('profesional', 'tiago.ramos@example-company.com'),
  new Telefono('fijo', 91123123)
);

console.log('********* Estos son los 3 registros con los cambios realizados *********');
console.log(monica.mostrarInformacion());
console.log(samantha.mostrarInformacion());
console.log(tiago.mostrarInformacion());
