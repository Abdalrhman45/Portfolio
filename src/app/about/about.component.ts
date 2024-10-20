import { Component } from '@angular/core';
import { AboutService } from '../shared/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private _about: AboutService) { }

  aboutMe : string = '';
  cv:string = '';
  profileImg : string = '';

  ngOnInit(): void {
    this._about.description.subscribe({
      next: (data) => {
        if(data)
          this.aboutMe = data;
      }
    });
    this._about.cv.subscribe({
      next: (data) => {
        if(data)
          this.cv = data;
      }
    });
    this._about.image.subscribe({
      next: (data) => {
        if(data)
          this.profileImg = data;
      }
    });

    this.updateAbout();
    
  }

  updateAbout(){
    this._about.getData().subscribe({
      next: (res)=>{
        if(res.description){
          this.aboutMe = res.description;
        }
        if(res.cv){
          this.cv = res.cv;
        }
        if(res.image){
          this.profileImg = res.image;
        }
      }
    })
  }

}
