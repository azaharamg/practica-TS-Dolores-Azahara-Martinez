type tipoMail = 'personal' | 'profesional';

export class Mail {
  constructor(public tipo: tipoMail, public direccion: string) {}

  toString(): string {
    return `${this.tipo}: ${this.direccion}`;
  }
}
