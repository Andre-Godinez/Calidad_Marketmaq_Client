export class Brand {
  id: string;
  name: string;
  urlImage: string;
  description: string;
  priority: number;
  status: number;
  cant: number;
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
    this.urlImage = obj && obj.urlImage || null;
    this.description = obj && obj.description || null;
    this.priority = obj && obj.priority || null;
    this.status = obj && obj.status || null;
    this.cant = obj && obj.cant || 0;
  }
}
