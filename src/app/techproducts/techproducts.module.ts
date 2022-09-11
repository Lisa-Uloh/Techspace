import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechproductsRoutingModule } from './techproducts-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    // DetailsComponent
  ],
  imports: [
    CommonModule,
    TechproductsRoutingModule
  ]
})
export class TechproductsModule { }
