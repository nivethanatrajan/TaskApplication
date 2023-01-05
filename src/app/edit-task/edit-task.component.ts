import { Component, Inject,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EdidTaskComponent implements OnInit {

  taskForm !: FormGroup; 
  constructor(private formBuilder:FormBuilder, private api:ApiService,private router: Router,@Inject(MAT_DIALOG_DATA) public editData: any){} 

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      body:['',Validators.required],
      userId:[Math.floor(100 + Math.random() * 10)]
    })
    if (this.editData) {  
      this.taskForm.controls['title'].setValue(this.editData.title)
      this.taskForm.controls['body'].setValue(this.editData.body)
    }
  }
  addTask() {   
    if (!this.editData) {
      if (this.taskForm.valid) {
        this.api.postTask(this.taskForm.value)
          .subscribe({
            next: (res) => {
              alert('Product added succesfully')
              this.taskForm.reset() 
            },
            error: () => {
              alert("Error while adding the product")
            }
          })
      }
    }  
    }   
  clearTask(){
   this.taskForm.reset()
  }

}
