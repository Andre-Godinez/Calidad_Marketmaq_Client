export class Company {
  id: string;
  name: string;
  ruc: string;
  website: string;
  contact: string;
  phone: string;
  priority: number;
  urlImage: string;
  status: number;
  active: boolean;
  enabled: boolean;
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
    this.ruc = obj && obj.ruc || null;
    this.website = obj && obj.website || null;
    this.contact = obj && obj.contact || null;
    this.phone = obj && obj.phone || null;
    this.priority = obj && obj.priority || null;
    this.urlImage = obj && obj.urlImage || null;
    this.status = obj && obj.status || null;
    this.active = obj && obj.active || null;
    this.enabled = obj && obj.enabled || null;
  }
}
