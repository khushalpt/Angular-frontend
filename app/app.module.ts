//Defines the root module, named AppModule, that tells Angular how to assemble the application. Initially declares only the AppComponent

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ETListComponent } from './et-list/et-list.component';
import { CreateETComponent } from './create-et/create-et.component';
import { FormsModule} from '@angular/forms';
import { UpdateETComponent } from './update-et/update-et.component';
import { ETDetailsComponent } from './et-details/et-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ETListComponent,
    CreateETComponent,
    UpdateETComponent,
    ETDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }