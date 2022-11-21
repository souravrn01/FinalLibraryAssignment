import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  User = {
    email:'',
    password:'',
    name:''
  }

  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
  }
validate(){
  console.log(this.User)
  this.api.signup(this.User).subscribe(res=>{
    console.log(res);
    alert("Signup successfull!! now please login")
    this.router.navigateByUrl('/login')
  })
  
  
}
}
 