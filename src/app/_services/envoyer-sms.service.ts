import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SMSTable } from '../excel-sms/SMSTable';

const API_URL = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class EnvoyerSMSService {

  constructor(private http: HttpClient) { }

  getAllSMSTable(id:number): Observable<SMSTable[]> {
    return this.http.get<SMSTable[]>(API_URL+'SMSTables/' +3+ '/user');
  }


  addSMSTable(uploadImageData:FormData,id:number):Observable <any> {
    console.log("id centre")
    //console.log(agriculteur.selectedCentreId);
    return this.http.post(API_URL+'SMSTables/' +1+ '/user', uploadImageData);
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}