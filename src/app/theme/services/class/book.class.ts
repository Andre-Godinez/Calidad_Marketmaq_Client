export class Book {
  id: string;
  servicio: string;
  categoria: string;
  monto:string;
  tipo:string;
  descripcion:string;
  detalleReclamo:string;
  detalle:string;
  pedido:string;
  numero:string;
  usuarioId: string;
  telefono:string;
  celular:string;
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.servicio = obj && obj.servicio || null;
    this.categoria = obj && obj.categoria || null;
    this.monto = obj && obj.monto || null;
    this.tipo = obj && obj.tipo || null;
    this.descripcion = obj && obj.descripcion || null;
    this.detalleReclamo = obj && obj.detalleReclamo || null;
    this.detalle = obj && obj.detalle || null;
    this.pedido = obj && obj.detalle || null;
    this.numero = obj && obj.numero || null;
    this.usuarioId = obj && obj.usuarioId || null;
    this.telefono = obj && obj.telefono || null;
    this.celular = obj && obj.celular || null;
  }
}
