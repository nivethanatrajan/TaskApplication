import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postProduct(data:any){
    return this.http.post<any>("https://jsonplaceholder.typicode.com/posts",data)
  }
  getProduct(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts");
  }
  putProduct(data:any, id:number){
    return this.http.put<any>("https://jsonplaceholder.typicode.com/posts/"+id,data);
  }
  deleteProduct(id:number){
    return this.http.delete<any>("https://jsonplaceholder.typicode.com/posts/"+id);
  }
}
//("http://localhost:3000/posts",data) 
