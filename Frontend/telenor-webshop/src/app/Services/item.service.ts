import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { tap, catchError, mapTo } from 'rxjs/operators';
// import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  headers: HttpHeaders = new HttpHeaders();


  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
  }

  getItems(): any {
    return this.http.get<any>(`${environment.apiUrl}/main`, { headers: this.headers })
  }

  // bid(data: { _id: any, price: number, rt: string }): any {
  //   return this.http.post<any>(`${environment.apiUrl}/buyitem`, data, { headers: this.headers }).pipe(
  //     tap(res => {
  //     }),
  //     mapTo(true),
  //     catchError(error => {
  //       return of(false);
  //     }));
  // }

  getMyCart(): any {
    return this.http.get<any>(`${environment.apiUrl}/cart`, { headers: this.headers })
  }
}
