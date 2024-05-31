import { Injectable } from '@angular/core';
import { Menu } from '../../models/menu.class';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Menu[] = [];

  constructor() {}

  addToCart(product: any) {
    let item = this.items.find((i) => i.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  getItems() {
    return this.items;
  }

  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  incrementQuantity(id: string) {
    let item: any = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity++;
    }
  }
  decrementQuantity(id: string) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.delete(item);
      }
    }
  }
  getTotal() {
    return this.items
      .reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  }
}
