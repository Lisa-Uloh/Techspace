import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'product', redirectTo: 'product/:id/home', pathMatch: 'full'},
  { path: 'product/:productId/home', component: HomeComponent },
  // { path: 'post/:postId/view', component: ViewComponent },
  // { path: 'post/create', component: CreateComponent },
  // { path: 'post/:postId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
