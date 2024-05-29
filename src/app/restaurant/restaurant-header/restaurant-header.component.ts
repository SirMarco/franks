import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-restaurant-header',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './restaurant-header.component.html',
  styleUrl: './restaurant-header.component.scss',
})
export class RestaurantHeaderComponent {}
