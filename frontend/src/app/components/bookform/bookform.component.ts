import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms' 
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({ 
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  bookForm:any=new FormGroup({
    'title':new FormControl(''),
    'author':new FormControl(''),
    'jenre':new FormControl(''),
    'language':new FormControl('')
    
  })
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.api.addbook(this.bookForm.value).subscribe(res=>{
      alert("Upload Success!! Now go back to Books")
      console.log(res)
      this.router.navigateByUrl('/books')
    })
  }
}
