import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweriesListComponent } from './breweries-list/breweries-list.component';
import { HomeComponent } from './products/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'list', component: BreweriesListComponent},
  // {path: 'post', redirectTo: 'post/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
