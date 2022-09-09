import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Enterprise } from '../model/enterprise';
import { Features } from '../model/features';
import { Free } from '../model/free';
import { Premium } from '../model/premium';
import { Product } from '../model/product';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {



  constructor(http: HttpClient)
  {
    super(http)
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.getURI('products'))
      .pipe(catchError(this.handleError));
  }

  getProductId(id: number) : Observable<Product> {
    // return this.http.get<Product>(this.getURI(`products/${id}`))
    return this.http.get<Product>(`http://localhost:3000/products/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getFeaturesId(id: number) : Observable<Features> {
    // return this.http.get<Product>(this.getURI(`products/${id}`))
    return this.http.get<Features>(`http://localhost:3000/features/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getFreeId(id: number) : Observable<Free> {
    // return this.http.get<Product>(this.getURI(`products/${id}`))
    return this.http.get<Free>(`http://localhost:3000/free/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getEnterpriseId(id: number) : Observable<Premium> {
    // return this.http.get<Product>(this.getURI(`products/${id}`))
    return this.http.get<Premium>(`http://localhost:3000/premium/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }
  getPremiumId(id: number) : Observable<Enterprise> {
    // return this.http.get<Product>(this.getURI(`products/${id}`))
    return this.http.get<Enterprise>(`http://localhost:3000/enterprise/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  // private apiURL = 'http://localhost:3000/products';
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

   
  // constructor(private httpClient: HttpClient) { }
  
  // getProducts(){
  //   return this.httpClient.get(this.apiURL);
  // }
  // getAll(): Observable<any> {
  
  //   return this.httpClient.get(this.apiURL)
  
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  // find(id:number): Observable<Product> {
  //     const url = `${this.apiURL}/${id}`;
  //   return this.httpClient.get<Product>(url)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
  // find(id:number): Observable<any> {
  
  //   return this.httpClient.get(this.apiURL + id)
  
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

//   errorHandler(error:any) {
//     let errorMessage = '';
//     if(error.error instanceof ErrorEvent) {
//       errorMessage = error.error.message;
//     } else {
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     return throwError(errorMessage);
//  }
  
}
