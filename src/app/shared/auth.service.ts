import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiURL = 'http://localhost:3000/user/login';
usersAPI = 'http://localhost:3000/user';
private tokenSubject :BehaviorSubject<string | null> = new BehaviorSubject<string |null>(null);
isLogin : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  
constructor(private _http:HttpClient, private _router:Router) {
  const token = localStorage.getItem('accesstoken')
  if(token){
    this.tokenSubject.next(token);
    this.isLogin.next(true);
  }
}


  login(data:any):Observable<any>{
    const {email,password} = data;
    return this._http.post<any>(this.apiURL,{email,password}).pipe(
      tap(res=>{
        const token = res;
        localStorage.setItem('accesstoken',token);
        // console.log(token);
        this.tokenSubject.next(token)
        this.isLogin.next(true);
      }
    ))
  }

  getToken():Observable<string|null>{
    return this.tokenSubject.asObservable();
  }

  logOut(){
    localStorage.removeItem('accesstoken');
    this.tokenSubject.next(null);
    this.isLogin.next(false);
    this._router.navigate(['/login']);
  }

  isAuthanticated():boolean{
    return this.tokenSubject.value !== null;
  }

  getUsers():Observable<any>{
    let token =  localStorage.getItem('accesstoken');

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    })
    return this._http.get<any>(this.usersAPI,{headers});
  }


}
