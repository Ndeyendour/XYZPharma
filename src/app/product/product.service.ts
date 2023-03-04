
import { Injectable } from '@angular/core';

import { PRODUCTS } from './mock-product';

import { Product } from './product';

@Injectable()
export class ProductService {
  // constructor(private http: HttpClient){}

  
  getAllProducts():Product[]{
    // return this.http.get<Product[]>('api/products').pipe(
    //   tap((response)=>this.log(response)),
    //   catchError((error) => this.handleError(error,undefined))
    // );
    return PRODUCTS;
  }
  

  getProductByName(productName:string):Product|undefined{
   
    //  return this.http.get<Product>(`api/products/${productName}`).pipe(
    //   tap((response)=>this.log(response)),
    //   catchError((error) => this.handleError(error,undefined))
       
    return PRODUCTS.find(product => product.name ==productName);
     
    
     
  }
  
}
