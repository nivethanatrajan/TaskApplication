import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EdidTaskComponent implements OnInit {
  taskForm!: FormGroup;
  id!: number;
  isAddMode!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: [Math.floor(100 + Math.random() * 10)],
    });

    if (!this.isAddMode) {
      this.api.getTask(this.id).subscribe((x) => this.taskForm.patchValue(x));
    }
  }

  addTask() {
    if (this.taskForm.valid) {
      var userid = this.api.postTask(this.taskForm.value).subscribe({
        next: (res) => {
          console.log(res, 'res.value');
          alert('Task Blog Updated succesfully');
          this.router.navigate(['/']);
          this.taskForm.reset();
        },
        error: () => {
          alert('Error while Updated the Task Blog');
        },
      });
    }
  }
}
