import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: 'techproducts/home', component: HomeComponent
},
{
  path:'techproducts/details/:id', component: DetailsComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    
  ],
  exports: [RouterModule]
})
export class TechproductsRoutingModule { }
