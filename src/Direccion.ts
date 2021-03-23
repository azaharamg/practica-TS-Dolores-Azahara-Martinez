export class Direccion {
  constructor(
    public calle: string,
    public numero: number,
    public piso: number,
    public letra: string,
    public codigoPostal: number,
    public poblacion: string,
    public provincia: string
  ) {}

  toString(): string {
    return `${this.calle}, ${this.numero}, ${this.piso}, ${this.letra}. ${this.poblacion}, ${this.provincia} (${this.codigoPostal})`;
  }
}
