import { Component } from '@angular/core';
import { Menu } from '../../models/menu.class';
import { FirebaseService } from '../services/firebase.service';
import { addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss',
})
export class ConfigComponent {
  menu: Menu = new Menu();
  name?: string;
  categorys: string[] = ['starters', 'hotdogs', 'burger', 'sides', 'drinks'];

  constructor(private firebase: FirebaseService) {}

  saveMenu() {
    addDoc(this.firebase.getMenusRef(), this.menu.toJSON())
      .catch((err) => {
        console.error(err);
      })
      .then((menu) => {
        console.log(menu);
      });
  }
}
