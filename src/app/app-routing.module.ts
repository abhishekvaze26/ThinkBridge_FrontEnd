import { DisplayProductComponent } from './display-product/display-product.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:ProductInsertComponent},
  {path:'displayProduct', component:DisplayProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
