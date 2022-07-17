import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginObj:any;
  constructor( private router:Router) { 
    this.loginObj={
      userName:'',
      password:''
    };
  }


  ngOnInit(): void {
  }
login(){
 if (this.loginObj.userName=="admin@gmail.com" && this.loginObj.password=="12345"){
this.router.navigateByUrl("order")
 }else{
  alert('Your Entered Wrong Credential')
 }
}
}
