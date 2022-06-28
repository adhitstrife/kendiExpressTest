import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { partners } from './menu';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  private url: string = 'https://62b94996ff109cd1dc8ec3f6.mockapi.io/partners'

  constructor(
    private http: HttpClient
  ) { }

  getPartners(): Observable<partners[]>{
    return this.http.get<partners[]>(this.url)
  }
}
