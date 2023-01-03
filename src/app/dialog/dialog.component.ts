import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  taskForm !: FormGroup;
  users:[] = [];
  constructor(private formBuilder:FormBuilder ){} 

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      body:['',Validators.required]
    })
  }
  addTask() {
  console.log(this.taskForm.value)
  }
  clearTask() {
   this.taskForm.reset()
  }
}
