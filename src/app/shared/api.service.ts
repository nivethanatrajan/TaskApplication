import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postTask(data: any) {
    return this.http.post<any>(
      'https://jsonplaceholder.typicode.com/posts',
      data
    );
  }
  getTask(id: number) {
    return this.http.get<any>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }
  getTaskcollection() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
  putTask(data: any, id: number) {
    return this.http.put<any>(
      'https://jsonplaceholder.typicode.com/posts/' + id,
      data
    );
  }
  deleteProduct(id: number) {
    return this.http.delete<any>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }
}
//("http://localhost:3000/posts",data)
