export class Category {
  id: string;
  name: string;
  description: string;
  status: number;
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
    this.description = obj && obj.description || null;
    this.status = obj && obj.status || null;
  }
}
