import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  taskForm!: FormGroup;
  users: [] = [];
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: [Math.floor(100 + Math.random() * 10)],
    });
  }
  addTask() {
    if (this.taskForm.valid) {
      var userid = this.api.postTask(this.taskForm.value).subscribe({
        next: (res) => {
          console.log(res, 'res.value');
          alert('Task Blog added succesfully');
          this.router.navigate(['/']);
          this.taskForm.reset();
        },
        error: () => {
          alert('Error while adding the Task Blog');
        },
      });
    }
  }
  clearTask() {
    this.taskForm.reset();
  }
}
