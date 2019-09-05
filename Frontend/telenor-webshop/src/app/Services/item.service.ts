import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  headers: HttpHeaders = new HttpHeaders();


  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
  }

  getMyCart(): any {
    return this.http.get<any>(`${environment.apiUrl}/wishlist`, { headers: this.headers })
  }
}
