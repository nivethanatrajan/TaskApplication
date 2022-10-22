import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskForm !: FormGroup;
  users:[] = [];
  constructor(private formBuilder:FormBuilder, private api:ApiService){} 

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      body:['',Validators.required]
    })
  }
  addTask() {
    console.log(this.taskForm.value)
    if (this.taskForm.valid) {

      const headers = { 'content-type': 'application/json' }  
      
      const body=JSON.stringify(this.taskForm.valid);
      console.log(body) 

      this.api.postTask(body).subscribe( {
        next: data => {
          console.log(data)      },
      error: error => {
         // this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
       // this.users.push({ tile: response.title, description: response.description });
      })
    }
  }
  clearTask() {
   this.taskForm.reset()
  }
  
}
