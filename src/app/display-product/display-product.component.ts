import { ShareDataService } from './../Services/share-data.service';
import { Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data.service';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  constructor(private sharedData:ShareDataService) { }
  productToDisplay:Product;
  productName:string;
  productDescription:string;
  prodcutPrice:number;
  ngOnInit(): void {
    this.productToDisplay = this.sharedData.sharedProduct;
    this.productName = this.productToDisplay.ProductName;
    this.productDescription = this.productToDisplay.ProductDescription;
    this.prodcutPrice = this.productToDisplay.ProductPrice;
    console.log("Inside display product:"+this.productToDisplay.ProductName);
  }

}
