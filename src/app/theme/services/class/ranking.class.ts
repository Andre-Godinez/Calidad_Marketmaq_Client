export class Ranking {
  id: string;
  title:string;
  descripcion: string;
  rankStar: string;
  usuarioId:string;
  publicationId:string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.title= obj && obj.title || null;
    this.descripcion = obj && obj.descripcion || null;
    this.rankStar = obj && obj.rankStar || null;
    this.usuarioId = obj && obj.usuarioId || null;
    this.publicationId = obj && obj.publicationId || null;
  }
}
