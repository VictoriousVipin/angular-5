import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {
    
   }
   
   getHomeData(): Observable<any> {
     return this.http.get('https://my-json-server.typicode.com/vishek2/angular/home');
   }
}
