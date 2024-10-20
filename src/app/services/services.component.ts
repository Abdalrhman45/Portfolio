import { Component } from '@angular/core';
import { Service } from '../shared/interfaces/data';
import { ServicesService } from '../shared/services.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  servicesList : Service[] = [];
  isLogin = false;

  constructor(private _services:ServicesService, private _auth: AuthService) { }

  ngOnInit(): void {
    this.updateServices();
    this._auth.isLogin.subscribe({
      next: (res) => {
        this.isLogin = res;
      }
    })
  }

  updateServices(){
    this._services.getServices().subscribe({
      next: (res)=>{
        this.servicesList = res;
      }
    });
  }

  deleteService(id: string){
    this._services.deleteService(id).subscribe({
      next: ()=>{
        this.updateServices();
      }
    })
  }

}
