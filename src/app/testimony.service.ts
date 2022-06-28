import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { testimony } from './menu';

@Injectable({
  providedIn: 'root'
})
export class TestimonyService {

  private url: string = 'https://62b94996ff109cd1dc8ec3f6.mockapi.io/comment/1'


  constructor(
    private http: HttpClient
  ) { }

  getTestimoni(): Observable<testimony>{
    return this.http.get<testimony>(this.url)
  }
}
