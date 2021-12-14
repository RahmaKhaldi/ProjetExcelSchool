import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expediteur } from '../board-user/Expediteur';

const API_URL = 'http://localhost:8080/api/auth/';
@Injectable({
  providedIn: 'root'
})
export class ExpediteurService {

  constructor(private http: HttpClient) { }

  getAllExpediteur(id:number): Observable<Expediteur[]> {
    return this.http.get<Expediteur[]>(API_URL+'Expediteurs/' +3+ '/user');
  }


  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
