import { Component } from '@angular/core';
import { RestaurantHeaderComponent } from './restaurant-header/restaurant-header.component';
import { MenuListComponent } from './menu-list/menu-list.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss',
  imports: [RestaurantHeaderComponent, MenuListComponent],
})
export class RestaurantComponent {}
