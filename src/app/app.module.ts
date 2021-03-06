import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component'; 
import { HeroService }         from './hero.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
/*
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
*/



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent    
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,    
    //InMemoryWebApiModule.forRoot(InMemoryDataService),

    AppRoutingModule    
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
