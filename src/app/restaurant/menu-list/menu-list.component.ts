import { Component } from '@angular/core';
import { onSnapshot } from '@angular/fire/firestore';
import { FirebaseService } from '../../services/firebase.service';
import { Menu } from '../../../models/menu.class';
import { MenuSingleComponent } from '../menu-single/menu-single.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
  imports: [MenuSingleComponent, CommonModule],
})
export class MenuListComponent {
  menuList: Menu[] = [];
  categoryList: string[] = ['Starters', 'HotDogs', 'Burger', 'Sides', 'Drinks'];
  unsubMenuList;

  constructor(private firebase: FirebaseService) {
    this.unsubMenuList = onSnapshot(this.firebase.getMenusRef(), (list) => {
      this.menuList = [];
      list.forEach((menu) => {
        this.menuList.push(this.setMenuObject(menu.data(), menu.id));
      });
      console.log(this.menuList);
    });
  }

  setMenuObject(data: any, id: string): Menu {
    return new Menu(data, id);
  }

  ngOnDestroy() {
    this.unsubMenuList();
    console.log('destroy menu');
  }
}
