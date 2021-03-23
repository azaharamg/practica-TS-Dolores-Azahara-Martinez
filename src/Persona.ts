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
  public _direcciones: Direccion;
  public _mails: Mail;
  public _telefonos: Telefono;
  private notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleaños: string,
    colorFavorito: color,
    sexo: sexo,
    direcciones: Direccion,
    mails: Mail,
    telefonos: Telefono,
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

  public set direcciones(direccion: Direccion) {
    this._direcciones = direccion;
  }

  public set mails(mail: Mail) {
    this._mails = mail;
  }

  public set telefonos(telefono: Telefono) {
    this._telefonos = telefono;
  }

  public mostrarInformacion(): string {
    return `Los datos personales de ${this.nombre} ${this.apellidos} son:\nEdad:${this.edad}\nDNI:${this._dni}\nCumpleaños:${this.cumpleaños}\nColor Favorito:${this.colorFavorito}\nSexo:${this.sexo}\nDirecciones:\n ${this._direcciones}\nMails:\n ${this._mails}\nTeléfonos:\n ${this._telefonos}\nNotas:\n${this.notas}`;
  }
}
