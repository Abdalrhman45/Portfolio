import { Component } from '@angular/core';
import { HomeDataService } from '../shared/home-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // تأكد من استخدام 'styleUrls' وليس 'styleUrl'
})
export class HomeComponent {
  name: string = '';
  title: string = '';
  backgroundImageUrl: string = 'assets/1.jpg'; // تأكد من أن المسار صحيح

  constructor(private _homeData: HomeDataService) {}

  ngOnInit(): void {
    this._homeData.name.subscribe({
      next: (data) => {
        if (data) this.name = data;
      }
    });
    this._homeData.title.subscribe({
      next: (data) => {
        if (data) this.title = data;
      }
    });
    this.updateHome();
  }

  updateHome() {
    this._homeData.getData().subscribe({
      next: (res) => {
        if (res.name) this.name = res.name;
        if (res.title) this.title = res.title;
      }
    });
  }
}
