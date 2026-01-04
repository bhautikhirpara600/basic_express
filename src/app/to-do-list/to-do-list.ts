import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList {
  task:string="";
  taskList: {id:number, task:string}[]=[];

  addTask() {
    this.taskList.push({id: this.taskList.length + 1, task: this.task});
    this.task="";
  }

  deleteTask(taskId: number) {
    this.taskList= this.taskList.filter(task => task.id != taskId)
  }
}
