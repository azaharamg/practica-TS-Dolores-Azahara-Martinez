type tipoTlf = 'movil' | 'fijo' | 'trabajo';

export class Telefono {
  constructor(public tipo: tipoTlf, public numero: number) {}

  toString(): string {
    return `${this.tipo}: ${this.numero}`;
  }
}
