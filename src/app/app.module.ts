import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { TempComponent } from './temp/temp.component';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { RentalListItemComponent } from './rental/rental-list-item/rental-list-item.component';

const routes:Routes=[{path:'hello',component:RentalComponent}];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentalComponent,
    TempComponent,
    RentalListComponent,
    RentalListItemComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
