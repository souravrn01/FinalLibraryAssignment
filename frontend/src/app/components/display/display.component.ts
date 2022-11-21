import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-display',  
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private apiservice : ApiService, private router:Router) { }

  allBooks:any = []

  ngOnInit(): void {
    this.getBooks()
  }

getBooks(){
  this.apiservice.getBooks().subscribe(res=>{
    this.allBooks = res
  })
}

deleteBook(id:any){
  
  if(confirm('Are You sure to delete this BOOk')){
    this.apiservice.deleteBook(id).subscribe(res=>{
      this.allBooks = res
      this.ngOnInit()
    })
  }
}

editBook(id:any){
  this.router.navigateByUrl(`/editPage/${id}`)
}

}
