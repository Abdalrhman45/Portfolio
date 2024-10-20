import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private _http: HttpClient) { }

  experienceApiUrl : string = 'http://localhost:3000/experience';

  addExperience(data: any){
    return this._http.post<any>(this.experienceApiUrl, data);
  }

  getExperience(){
    return this._http.get<any>(this.experienceApiUrl);
  }

  deleteExperience(id: string){
    return this._http.delete<any>(`${this.experienceApiUrl}/${id}`);
  }


}
