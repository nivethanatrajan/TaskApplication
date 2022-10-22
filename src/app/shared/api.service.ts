import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  postTask(data: any) {
    return this.http.post<any>("https://jsonplaceholder.typicode.com/posts",data)
  }
  viewTaskcollection() {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
  }
  editTask(data: any) {
    return this.http.put<any>("https://jsonplaceholder.typicode.com/posts/1",data)
  } 
  viewTask(id:number) {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts/"+id)
  }

}
