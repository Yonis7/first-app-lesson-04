//Import components and Routes
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

// Add routes to the application
const routeConfig: Routes = [

  //The entries in the routeConfig array represent the routes in the application. The first entry navigates to the HomeComponent whenever the url matches '' (the empty string). The second entry navigates to the DetailsComponent whenever the url matches 'details/:id'. The :id is a route parameter that is used to identify the housing location to display.
  
  {
    path: '',
    component: HomeComponent,
    title: 'Homepage'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home Details'
  }
];
export default routeConfig;

