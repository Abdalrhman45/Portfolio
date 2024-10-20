import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _http:HttpClient) { }

  myServicesApiUrl : string = 'http://localhost:3000/services';

  addNewService(data: any): Observable<any> {
    return this._http.post<any>(this.myServicesApiUrl, data);
  }

  getServices(): Observable<any> {
    return this._http.get<any>(this.myServicesApiUrl);
  }

  deleteService(id: string): Observable<any> {
    return this._http.delete<any>(`${this.myServicesApiUrl}/${id}`);
  }

}
