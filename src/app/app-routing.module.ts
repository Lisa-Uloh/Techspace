import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './products/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path:'list', component: BreweriesListComponent},
  { path: 'products/:id', component: HomeComponent },
  // {path: 'post', redirectTo: 'post/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
