import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  // public getBreweries(){
  //   return this.httpClient.get('https://api.openbrewerydb.org/breweries');
  // }
  // public sendGetRequest(){
  //   return this.httpClient.get(this.REST_API_SERVER);
  // }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
  }
  
}

