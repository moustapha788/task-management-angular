import {Injectable, signal, WritableSignal} from '@angular/core';
import {Task} from "../models/types/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: WritableSignal<Task[]> = signal([])
  constructor() { }
}
