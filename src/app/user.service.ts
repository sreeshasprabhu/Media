import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private _router: Router) { }
  
  newUser(item){
    return this.http.post("http://localhost:5000/signup",{"user":item})
    .subscribe(data=>{
      console.log(data);
      alert("Successfully Registered");
      this._router.navigate(['/login']);
      
    },err=>{
      alert("EmailId already exists");
        this._router.navigate(['/signup']);
    }
    )
  }
  newUserVideo(item){   
      return this.http.post("http://localhost:5000/signup",{"user":item})
      .subscribe(data=>{
        console.log(data);
      })
    }
}
