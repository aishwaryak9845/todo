import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor( public http: HttpClient) { }
  Url: string='https://jsonplaceholder.typicode.com/';
 


  
  getTodos(): Observable<any>{
    return this.http.get<TodoService[]>(this.Url);

  }
}
