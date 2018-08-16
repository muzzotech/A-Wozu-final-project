import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayTasksComponent } from './components/display-tasks/display-tasks.component';
import { DisplayTaskComponent } from './components/display-task/display-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

  ],
  declarations: [
    DisplayTasksComponent,
    DisplayTaskComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    DetailsComponent
  ],
  exports: [
    DisplayTaskComponent,
    DisplayTasksComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    DetailsComponent
  ]
})
export class TasksModule { }
