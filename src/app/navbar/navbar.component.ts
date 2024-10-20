import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Component, HostListener } from '@angular/core';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faBars = faBars;
  isScrolled = false;
  isLogin = false;

  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
    this._auth.isLogin.subscribe({
      next: (res) => {
        this.isLogin = res;
      }
    })
  }

  @HostListener('window:scroll', [])
    onWindowScroll(): void {
      const scrollOffset = document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.isScrolled = scrollOffset > 30; 
    }


    logOut(){
      this._auth.logOut();
    }

}
