import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get('http://localhost:5000/api/book')
  }

  deleteBook(id:any){
    return this.http.delete(`http://localhost:5000/api/book/${id}`)
  }

  addbook(data:any){
    return this.http.post(`http://localhost:5000/api/book`, data)
  }

  updatebook(id:any, data:any){
    return this.http.put('http://localhost:5000/api/book', {id,data})
  }

  getonebook(id:any){
    return this.http.get(`http://localhost:5000/api/onebook/${id}`)
  }

  signup(data:any){
    return this.http.post(`http://localhost:5000/api/signup`, data)
  }

  login(){
    return this.http.get('http://localhost:5000/api/login')
  }
}
  