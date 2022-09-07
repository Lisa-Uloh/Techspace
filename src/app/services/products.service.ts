import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL = 'http://localhost:3000/products';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
  
  getProducts(){
    return this.httpClient.get(this.apiURL);
  }
  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // find(id:number): Observable<Product> {
  //     const url = `${this.apiURL}/${id}`;
  //   return this.httpClient.get<Product>(url)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
  
}
