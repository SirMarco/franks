import { Component } from '@angular/core';
import { RestaurantHeaderComponent } from './restaurant-header/restaurant-header.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss',
  imports: [RestaurantHeaderComponent],
})
export class RestaurantComponent {}
