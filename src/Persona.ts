import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';

type sexo = 'Mujer' | 'Hombre';
type color = 'amarillo' | 'rojo' | 'verde' | 'azul' | 'blanco' | 'naranja' | 'rosa' | 'negro' | 'gris';

export class Persona {
  private readonly nombre: string;
  private readonly apellidos: string;
  private edad: number;
  public readonly _dni: string;
  private readonly cumpleaños: string;
  private colorFavorito: color;
  private readonly sexo: sexo;
  public _direcciones: Array<Direccion>;
  public _mails: Array<Mail>;
  public _telefonos: Array<Telefono>;
  private notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleaños: string,
    colorFavorito: color,
    sexo: sexo,
    direcciones: Array<Direccion>,
    mails: Array<Mail>,
    telefonos: Array<Telefono>,
    notas: string
  ) {
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

  public get dni(): string {
    return this._dni;
  }

  public agregarDireccion(nuevaDireccion: Direccion): void {
    this._direcciones.push(nuevaDireccion);
  }

  public agregarMail(nuevoMail: Mail): void {
    this._mails.push(nuevoMail);
  }

  public agregarTelefono(nuevoTelefono: Telefono): void {
    this._telefonos.push(nuevoTelefono);
  }

  private informacionDeContacto(listado: Array<any>): string {
    let result: string = '';

    listado.forEach((elemento) => {
      result += `${elemento}\n `;
    });

    return result;
  }

  public mostrarInformacion(): string {
    return `Los datos personales de ${this.nombre} ${this.apellidos} son:\nEdad:${this.edad}\nDNI:${
      this._dni
    }\nCumpleaños:${this.cumpleaños}\nColor Favorito:${this.colorFavorito}\nSexo:${
      this.sexo
    }\nDirecciones:\n ${this.informacionDeContacto(this._direcciones)}\nMails:\n ${this.informacionDeContacto(
      this._mails
    )}\nTeléfonos:\n ${this.informacionDeContacto(this._telefonos)}\nNotas:\n${this.notas}`;
  }
}
