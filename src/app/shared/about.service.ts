import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  description: BehaviorSubject<string> = new BehaviorSubject('');
  cv: BehaviorSubject<string> = new BehaviorSubject('');
  image: BehaviorSubject<string> = new BehaviorSubject('');

  myProductApiUrl : string = 'http://localhost:3000/about';

  constructor(private _http: HttpClient) { }

  addData(data: FormData): Observable<any> {
    return this._http.post<any>(this.myProductApiUrl, data);
  }

  getData(): Observable<any> {
    return this._http.get<any>(this.myProductApiUrl);
  }


}
