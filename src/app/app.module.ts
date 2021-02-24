import { DataService } from './Services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DisplayProductComponent,
    ProductInsertComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,RouterModule.forRoot([
      {path:'', component: ProductInsertComponent},
      {path:'productsDisplay', component:DisplayProductComponent },
      {path:'posts', component:ProductInsertComponent}
    ])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule
]
})
export class AppModule { }
