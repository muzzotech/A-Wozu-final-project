import { Injectable } from '@angular/core';
import { Task } from '../../../shared/models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  lastId = 0;

  tasks: Task[] = [];

  addTask(task: Task): TasksService {
    if (!task.id) {
      task.id = this.lastId++;
    }
    this.tasks.push(task);
    return this;
  }

  deleteTaskById(id: number): TasksService {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return this;
  }

  updateTaskById(id: number, values: Object = {}): Task {
    const task = this.getTaskById(id);
    if (!task) {
      return null;
    }
    Object.assign(task, values);
    return task;
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  getTaskById(id: number): Task {
    return this.tasks.filter(task => task.id === id).pop();
  }

  toggleTaskComplete(task: Task) {
    const updatedTask = this.updateTaskById(task.id, { complete: !task.complete});
    return updatedTask;
  }
  constructor() { }
}
