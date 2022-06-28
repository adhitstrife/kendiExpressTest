import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { menu } from './menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private url: string = 'https://62b94996ff109cd1dc8ec3f6.mockapi.io/menu'

  constructor(
    private http: HttpClient
  ) { }

  getMenu(): Observable<menu[]>{
    return this.http.get<menu[]>(this.url)
  }
}
