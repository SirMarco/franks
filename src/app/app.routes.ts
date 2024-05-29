import { Routes } from '@angular/router';
import { RestaurantHeaderComponent } from './restaurant/restaurant-header/restaurant-header.component';
import { ConfigComponent } from './config/config.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

export const routes: Routes = [
  { path: '', component: RestaurantComponent },
  { path: 'config', component: ConfigComponent },
];
