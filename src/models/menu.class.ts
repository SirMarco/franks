export class Menu {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  picture: string;
  quantity: number;

  constructor(obj?: any, id?: string) {
    this.id = id || '';
    this.name = obj ? obj.name : '';
    this.description = obj ? obj.description : '';
    this.price =
      obj && typeof obj.price === 'string' ? parseFloat(obj.price) : 0;
    this.category = obj ? obj.category : '';
    this.picture = obj ? obj.picture : '';
    this.quantity = obj && typeof obj.quantity === 'number' ? obj.quantity : 1;
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      category: this.category,
      picture: this.picture,
      quantity: this.quantity,
    };
  }
}
