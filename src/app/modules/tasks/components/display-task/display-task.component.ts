import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../../../shared/models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {

  @Input() model: Task;
  @Output() remove: EventEmitter<number> = new EventEmitter();
  @Output() toggleComplete: EventEmitter<Task> = new EventEmitter();

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  toggleTaskComplete(task: Task) {
    this.toggleComplete.emit(task);
  }

  removeTask(_id) {
    console.log('We got this far.');
    console.log(this.model.id);
    this.tasksService.deleteTaskById(this.model.id);
    // this.remove.emit(this.model.id);
  }
}
