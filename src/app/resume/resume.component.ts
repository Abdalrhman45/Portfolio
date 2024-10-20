import { Experience } from './../shared/interfaces/data';
import { Component } from '@angular/core';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { Education } from '../shared/interfaces/data';
import { AuthService } from '../shared/auth.service';
import { EducationService } from '../shared/education.service';
import { ExperienceService } from '../shared/experience.service';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  educationList : Education[] = [];
  experienceList : Experience[] = [];
  isLogin = false;
  faCalendarWeek = faCalendarWeek;

  constructor(private _education:EducationService, private _auth: AuthService, private _experienc : ExperienceService) { }

  ngOnInit(): void {
    this.updateEducation();
    this.updateExperience();
    this._auth.isLogin.subscribe({
      next: (res) => {
        this.isLogin = res;
      }
    })
    
  }

  updateEducation(){
    this._education.getEducation().subscribe({
      next: (res)=>{
        this.educationList = res;
      }
    });
  }

  updateExperience(){
    this._experienc.getExperience().subscribe({
      next: (res)=>{
        this.experienceList = res;
      }
    });
  }

  deleteEducation(id: string){
    this._education.deleteEducation(id).subscribe({
      next: ()=>{
        this.updateEducation();
      }
    })
  }

  deleteExperience(id: string){
    this._experienc.deleteExperience(id).subscribe({
      next: ()=>{
        this.updateExperience();
      }
    })
  }

}
