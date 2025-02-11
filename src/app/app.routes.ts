import { Routes } from '@angular/router';
import { JsonComponent } from './json/json.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'json', component: JsonComponent },
];
