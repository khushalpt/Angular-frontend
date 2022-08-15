//Routing for the Angular app is configured as an array of Routes, each component is mapped to a path so the Angular Router knows which component to display based on the URL in the browser address bar

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ETListComponent } from './et-list/et-list.component';
import { CreateETComponent } from './create-et/create-et.component';
import { UpdateETComponent } from './update-et/update-et.component';
import { ETDetailsComponent } from './et-details/et-details.component';

const routes: Routes = [
  {path: 'technologies', component: ETListComponent},
  {path: 'create-et', component: CreateETComponent},
  {path: '', redirectTo: 'technologies', pathMatch: 'full'},
  {path: 'update-et/:id', component: UpdateETComponent},
  {path: 'et-details/:id', component: ETDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }