// src/app/app.routes.ts
import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactusComponent } from './components/contactus/contactus.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent },    // Default route
  { path: 'about', component: AboutComponent }, 
  { path: 'services', component: ServicesComponent },
  { path: 'contactus', component: ContactusComponent }
];
