import { Injectable } from '@angular/core';
import { Menu } from '../../models/menu.class';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Menu[] = [];

  constructor() {}

  addToCart(currentMenu: Menu) {
    let item = this.items.find((i) => i.id === currentMenu.id);
    if (item) {
      item.quantity++;
    } else {
      this.items.push(currentMenu);
      console.log(currentMenu);
    }
  }

  getItems() {
    return this.items;
  }

  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  addQuantity(id: string) {
    let item: any = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity++;
    }
  }

  removeQuantity(id: string) {
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
