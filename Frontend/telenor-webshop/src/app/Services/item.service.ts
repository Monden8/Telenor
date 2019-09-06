import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap, mapTo, catchError } from "rxjs/operators";
import { of, Observable, BehaviorSubject } from "rxjs";
// import { tap, catchError, mapTo } from 'rxjs/operators';
// import { of } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ItemService {
  headers: HttpHeaders = new HttpHeaders();
  arguments: BehaviorSubject<any> = new BehaviorSubject("");
  obs = this.arguments.asObservable();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append("Content-Type", "application/json");
  }

  getItems(): any {
    return this.http.get<any>(`${environment.apiUrl}/main`, {
      headers: this.headers
    });
  }

  addItem(id: string) {
    return this.http
      .put<any>(`${environment.apiUrl}/addtocart`, id, {
        headers: this.headers
      })
      .pipe(
        tap(res => {}),
        mapTo(true),
        catchError(error => {
          return of(false);
        })
      );
  }
  getMyCart(): any {
    return this.http.get<any>(`${environment.apiUrl}/cart`, {
      headers: this.headers
    });
  }
  getArguments(data?): Observable<any> {
    let arg = data
    return arg.asObservable()
  }
}
