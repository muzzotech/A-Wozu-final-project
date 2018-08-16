import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../../../../shared/models/task';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {

  tasks: Task [];

  @Output() remove: EventEmitter<Task> = new EventEmitter();
  @Output() toggleComplete: EventEmitter<Task> = new EventEmitter();

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  onToggleTaskComplete(task: Task) {
    this.toggleComplete.emit(task);
  }

  onRemoveTask(task: Task) {
    this.remove.emit(task);
  }

}
