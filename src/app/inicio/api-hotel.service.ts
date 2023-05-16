import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHotelService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("https://restcountries.com/v2/lang/es");
  }
}
