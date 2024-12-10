import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';  // Import routes from the routing file
import { AppComponent } from './app/app.component';  // The root component

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))  // Configure the RouterModule with the routes
  ]
});
