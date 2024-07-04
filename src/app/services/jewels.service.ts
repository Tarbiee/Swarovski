import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jewelry } from './models/jewelry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JewelsService {

  private baseUrl:string ="https://localhost:7188/api/Jewel";
  constructor(
    private http: HttpClient
  ) { }

  getAllJewels(): Observable<Jewelry[]>{
    return this.http.get<Jewelry[]>(`${this.baseUrl}/getAllJewels`);
  }

  createJewel(jewel: Jewelry): Observable<Jewelry>{
    return this.http.post<Jewelry>(`${this.baseUrl}/addJewel` ,jewel)
  }

  editJewel(id: number): Observable<Jewelry>{
    return this.http.get<Jewelry>(`${this.baseUrl}/getById/${id}`)
  }

  updateJewel(jewel: Jewelry): Observable<Jewelry> {
    return this.http.put<Jewelry>(`${this.baseUrl}/updateJewel/${jewel.id}`, jewel);
  }

  deleteJewel(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/deleteJewel/${id}`)
  }
}
