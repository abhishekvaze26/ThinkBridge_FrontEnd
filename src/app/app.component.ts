import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopBridge';

  constructor(http:HttpClient){
    http.get("https://localhost:44366/api/Products").subscribe(Response=>{
      console.log(Response);
    });
  }
}
