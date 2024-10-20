import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DataForms } from '../shared/data';
import { HomeDataService } from '../shared/home-data.service';
import { AboutService } from '../shared/about.service';
import { ServicesService } from '../shared/services.service';
import { EducationService } from '../shared/education.service';
import { ExperienceService } from '../shared/experience.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _home:HomeDataService, private _about: AboutService, private _services:ServicesService,private _education: EducationService,
    private _experience: ExperienceService
  ) { }

  formNumber = 0;
  homeForm : FormGroup = new FormGroup({
    name: new FormControl('', [ Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]),
    title: new FormControl('', [ Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]),
    image: new FormControl(null),
  });

  aboutForm : FormGroup = new FormGroup({
    description: new FormControl('', [ Validators.minLength(3), Validators.maxLength(300)]),
    cv: new FormControl('', [Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&//=]*)')]),
    image: new FormControl(null),
  });

  seviceForm : FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required ,Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
  })

  educationForm : FormGroup = new FormGroup({
    school: new FormControl('', [Validators.required ,Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]),
    title: new FormControl('', [Validators.required ,Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    checkbox: new FormControl(false),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
  });

  experienceForm : FormGroup = new FormGroup({
    company: new FormControl('', [Validators.required ,Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]),
    title: new FormControl('', [Validators.required ,Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    checkbox: new FormControl(false),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
  });

  activateLink(event: any){
    let links = document.querySelectorAll('.dash-link');
    links.forEach(link => {
      link.classList.remove('activeLink');
    });
    event.target.classList.add('activeLink');
    this.formNumber = +DataForms[event.target.text];
    
  }

  addToHome(){
    let homeData = new FormData();
    homeData.append('name', this.homeForm.get('name')?.value);
    homeData.append('title', this.homeForm.get('title')?.value);
    homeData.append('image', this.homeForm.get('image')?.value);
    this._home.addData(homeData).subscribe(
      (res) => {
        this.updateHome(res);
      }
    );
    
  }

  addToAbout(){
    let aboutData = new FormData();
    aboutData.append('description', this.aboutForm.get('description')?.value);
    aboutData.append('cv', this.aboutForm.get('cv')?.value);
    aboutData.append('image', this.aboutForm.get('image')?.value);
    this._about.addData(aboutData).subscribe(
      (res) => {
        this.updateAbout(res);
      }
    )
  }

  addService(){
    this._services.addNewService(this.seviceForm.value).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

  addEducation(){
    let educationData = {};
    if(this.educationForm.get('checkbox')?.value){
      educationData = {
        ... this.educationForm.value,
        endDate: "present"
      }
    }else{
      educationData = this.educationForm.value;
    }

    this._education.addEducation(educationData).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

  addExperience(){
    let experienceData = {};
    if(this.experienceForm.get('checkbox')?.value){
      experienceData = {
        ... this.experienceForm.value,
        endDate: "present"
      }
    }else{
      experienceData = this.experienceForm.value;
    }

    this._experience.addExperience(experienceData).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

  updateHome(data: any){
    console.log(data.name, data.title, data.image);
    if(data.name){
      this._home.name.next(data.name);
    }
    if(data.title){
      this._home.title.next(data.title);
    }
    if(data.image){
      this._home.image.next(data.image);
    }
  }

  updateAbout(data: any){
    console.log(data.description, data.cv, data.image);
    if(data.description){
      this._about.description.next(data.description);
    }
    if(data.cv){
      this._about.cv.next(data.cv);
    }
    if(data.image){
      this._about.image.next(data.image);
    }
  }

  fileChange(event: any, form: FormGroup) {
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      form.patchValue({
        image: file
      })
    }
  }

  togglePresent(form: FormGroup) {
    const endDateInput = document.getElementById('endDate') as HTMLInputElement;
    const presentCheckbox = document.getElementById('presentCheckbox') as HTMLInputElement;
  
    if (presentCheckbox.checked) {
      form.controls['endDate'].disable();
      endDateInput.disabled = true;
      endDateInput.value = "";
    } else {
      form.controls['endDate'].enable();
      endDateInput.disabled = false;
    }
  }
  


}
