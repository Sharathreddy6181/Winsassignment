import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  task: any;
  taskCreated: boolean = false;
  tasks: Array<any> = [
    { name: "Test Task #7", date: "12/07/2012", assigned: "John Doe"},
    { name: "Test Task #6", date: "12/06/2012", assigned: "John Doe"},
    { name: "Test Task #5", date: "12/05/2012", assigned: "John Doe"},
    { name: "Test Task #4", date: "12/04/2012", assigned: "John Doe"},
    { name: "Test Task #3", date: "12/03/2012", assigned: "John Doe"},
    { name: "Test Task #2", date: "12/02/2012", assigned: "John Doe"},
    { name: "Test Task #1", date: "12/01/2012", assigned: "John Doe"},
  ];

  ngOnInit(){
    this.createTaskObj();
  }
  createTaskObj() {
    this.task = {
      name: '',
      date: '',
      assigned: ''
    };
  }

  createTask(myForm: NgForm) {
    const newTask = JSON.parse(JSON.stringify(this.task));
    this.tasks.unshift(newTask);
    this.taskCreated = true;
    myForm.resetForm();
    setTimeout(() => { 
      this.taskCreated = false;
    }, 5000);
  }

  removeTask(index) {
    if(confirm("Are you sure want to remove task?")) {
      this.tasks.splice(index, 1);
    }
  }
}
