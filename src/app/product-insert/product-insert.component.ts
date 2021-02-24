import { DataService } from './../Services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ShareDataService } from '../Services/share-data.service';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent implements OnInit {

  allProducts:Product[];
  products:Product[];
  constructor(private service:DataService, private shareData:ShareDataService, private router:Router) { }

  ngOnInit(): void {
    this.service._refreshNeeded$.subscribe(()=>{
      this.GetAllProducts();
    })
    this.GetAllProducts();
  }

  GetAllProducts(){
    this.service.GetProducts().subscribe(
      data=>{
        this.allProducts = data as Product[];
      }
    );
  }

  DisplayProduct(p:Product){
    console.log(p.ProductName);
    this.shareData.sharedProduct = p;
    this.router.navigate(['/displayProduct']);
  }

  submitClicked(f){
    console.log(f);
    this.service.PostProduct(new Product(f.value.productName,f.value.productPrice,f.value.productDescription)).subscribe(
      data=>{
        console.log(data);
      }
    );
    this.service.GetProducts().subscribe(
      data=>{
        this.allProducts = data as Product[];
      }
    );
  }

  RemoveProduct(p:Product){
    console.log("inside remove...",p.ProductId);
    this.service.DeleteProduct(p).subscribe(
      data=>{
        console.log(data);
      }
    );
    this.service.GetProducts().subscribe(
      data=>{
        this.allProducts = data as Product[];
      }
    );
  }


}
