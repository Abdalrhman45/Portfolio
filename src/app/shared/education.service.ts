import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  educationApiUrl : string = 'http://localhost:3000/education';

  addEducation(data: any){
    return this.http.post<any>(this.educationApiUrl, data);
  }

  getEducation(){
    return this.http.get<any>(this.educationApiUrl);
  }

  deleteEducation(id: string){
    return this.http.delete<any>(`${this.educationApiUrl}/${id}`);
  }

}
