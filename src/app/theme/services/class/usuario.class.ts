export class Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  uid: string;
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.nombre = obj && obj.nombre || null;
    this.apellido = obj && obj.apellido || null;
    this.email = obj && obj.email || null;
    this.uid = obj && obj.uid || null;
  }
}
