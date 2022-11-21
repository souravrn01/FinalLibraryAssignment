import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService, private router: Router) { } 

  database:any

  loginForm:any= new FormGroup({
    email:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
  })
  ngOnInit(): void {
    this.api.login().subscribe(res=>{
      this.database = res
      console.log(this.database);
    })
  }

  condition:any =''

  validate(){
   
    for (var data of this.database) {
        if(data.email === this.loginForm.value.email && data.password === this.loginForm.value.password){
          alert('login SUCCESS!!')
          this.router.navigateByUrl('/books')
        }
        else{
          this.condition = "Given Credentials are not available in the Data base"
        }
     }
    }
}
