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
    this.price = obj ? obj.price : '';
    // this.price = obj ? parseFloat(obj.price) : 0; // Ensure price is a number
    this.category = obj ? obj.category : '';
    this.picture = obj ? obj.picture : '';
    this.quantity = obj ? obj.quantity : '';
    // this.quantity = obj ? parseInt(obj.quantity, 10) : 0; // Ensure quantity is a number
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
