import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms'
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  id:any
  data:any = []
  editForm = {
    title:this.data.title,
    author:this.data.title,
    jenre:this.data.title,
    language:this.data.title
  }
 

  constructor(private api:ApiService,private router:Router,  private activatedRoute: ActivatedRoute,) { }
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.getOneBook(this.id)

  }
  onSubmit(id:any){
     this.api.updatebook(id,this.editForm).subscribe(res=>{
       console.log(res);
       alert('updation Success !!')
       this.router.navigateByUrl('/books')
     })

    
  }
  getOneBook(id:any){
    this.api.getonebook(id).subscribe(res=>{
      this.data = res
    })
  }
}
