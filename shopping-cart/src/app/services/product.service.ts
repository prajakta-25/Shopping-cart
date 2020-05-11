import { Injectable } from '@angular/core';

import { Product } from 'src/app/services/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1,'Product1','This is product 1 description.The product really cool!',100),
    new Product( 2,'Product1', 'This is product 2 description.The product really cool!', 150),
    new Product(3, 'Product1', 'This is product 3 description.The product really cool!', 200),
    new Product( 4,'Product1', 'This is product 4 description.The product really cool!', 250),
    new Product(5, 'Product1', 'This is product 5 description.The product really cool!', 300),
    new Product(6, 'Product1', 'This is product 6 description.The product really cool!', 350),
    new Product(7, 'Product1', 'This is product  7escription.The product really cool!', 400),
    new Product(8, 'Product1', 'This is product 8 7escription.The product really cool!', 500),
]  
  

  constructor() { }
  getProducts(): Product[] {
  //TODO: Populate products from an API and return an Observable }

    return this.products
      

  }
}
