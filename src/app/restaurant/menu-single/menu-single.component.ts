import { Component, Input, inject } from '@angular/core';
import { Menu } from '../../../models/menu.class';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu-single',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './menu-single.component.html',
  styleUrl: './menu-single.component.scss',
})
export class MenuSingleComponent {
  @Input() menu = new Menu();
  cartService = inject(CartService);

  constructor() {}
}
