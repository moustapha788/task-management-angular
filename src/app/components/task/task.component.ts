import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {TaskRowComponent} from "./task-row/task-row.component";
import {Task} from '../../models/types/task';
import {TaskService} from "../../services/task.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    TaskRowComponent,
    FormsModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {
  taskService: TaskService = inject(TaskService)
  newTask!: Task
  textInput: string = "New Task";

  ngOnInit(): void {
    this.taskService.tasks.set([
      {done: false, text: 'Install Dependencies'},
      {done: false, text: 'Product Feature'},
      {done: false, text: 'Write Unit test'},
      {done: false, text: 'Deploy app'},])
  }

  addTask() {
    this.newTask = {
      done: false,
      text: this.textInput
    }
    this.taskService.tasks.set([...this.taskService.tasks(), this.newTask])
  }

  onClear() {
    this.taskService.tasks.set([])
  }

  onChange($event: Event) {
    if($event.target){
      // @ts-ignore
      this.textInput =$event.target?.value
    }
  }
}




