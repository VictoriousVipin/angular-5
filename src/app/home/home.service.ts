import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {
    
   }
   
   getHomeData(i: number): Observable<any> {
    return this.http.get('https://my-json-server.typicode.com/vishek2/angular/home').pipe(map(data => {
      return data[i];
    }));
   }
}
