import {Component, inject, Input, OnInit} from '@angular/core';
import {Task} from '../../../models/types/task';
import {TaskService} from "../../../services/task.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-task-row',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './task-row.component.html',
  styleUrl: './task-row.component.scss'
})
export class TaskRowComponent implements OnInit {
  taskService: TaskService = inject(TaskService)
  @Input() task!: Task;
  textEdited!: string
  isDone: boolean = true;

  ngOnInit() {
    this.textEdited = this.task.text
  }

  onEdit() {
    this.task.text = 'New Task'
    this.textEdited = this.task.text
    this.task.done = false
  }

  onDelete() {
    if (window.confirm("Are you sure to delete?")) {
      this.taskService.tasks()
      this.taskService.tasks.set(this.taskService.tasks().filter(item => item !== this.task));
    }


  }

  onChange() {
    this.task.done = !this.task.done
  }
}
