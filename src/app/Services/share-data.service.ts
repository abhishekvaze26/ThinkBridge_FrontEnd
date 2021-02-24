import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  sharedProduct:Product;

  constructor() { }
}
