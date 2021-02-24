export class Product{
  ProductId:number;
  ProductName:string;
  ProductPrice:number;
  ProductDescription:string;

  constructor(name:string, price:number, description:string){
    this.ProductName=name;
    this.ProductPrice=price;
    this.ProductDescription=description;
  }
}
