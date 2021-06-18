import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  userItem= {
    name:'',
    email:'',
    password:''
  }
  ngOnInit(): void {
  }

}
