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

  createJewel(jewel: Jewelry): Observable<Jewelry>{
    return this.http.post<Jewelry>(this.baseUrl ,jewel)
  }

  editJewel(id: number): Observable<Jewelry>{
    return this.http.get<Jewelry>(`${this.baseUrl}/${id}`)
  }

  updateJewel(jewel: Jewelry): Observable<Jewelry> {
    return this.http.put<Jewelry>(`${this.baseUrl}/${jewel.id}`, jewel);
  }

  deleteJewel(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }
}
