import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {tap} from 'rxjs/operators';
import {Product} from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private refreshNeeded$ = new Subject<void>();
  private getUrl="https://localhost:44366/api/Products";

  constructor(private httpClient:HttpClient) { }

  get _refreshNeeded$(){
    return this.refreshNeeded$;
  }

  public GetProducts=():Observable<Product[]>=>{
    return this.httpClient.get<Product[]>(this.getUrl);
  }

  public PostProduct(product:Product){
    let headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    return this.httpClient.post(this.getUrl,product,{headers:headers})
    .pipe(tap(()=>{
      this.refreshNeeded$.next();
    })
    );
    //this.httpClient.post(this.getUrl,)
  }

  public DeleteProduct(product:Product){
    let headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    return this.httpClient.delete(this.getUrl+"/"+product.ProductId)
    .pipe(tap(()=>{
      this.refreshNeeded$.next();
    })
    );
  }
}
