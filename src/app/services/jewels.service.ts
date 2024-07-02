import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jewelry } from './models/jewelry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JewelsService {

  private baseUrl:string ="http://localhost:3000/jewelry";
  constructor(
    private http: HttpClient
  ) { }

  getAllJewels(): Observable<Jewelry[]>{
    return this.http.get<Jewelry[]>(this.baseUrl);

  }
}
