import { Component, OnInit } from '@angular/core';
import { Task } from '../../shared/models/task';
import { TasksService } from '../../modules/tasks/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  model: Task = new Task();
  dataService: TasksService;

  constructor(private tasksService: TasksService) {
    this.dataService = this.tasksService;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dataService.addTask(this.model);
  }
}
