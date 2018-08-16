import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './modules/tasks/components/add-task/add-task.component';
import { DisplayTaskComponent } from './modules/tasks/components/display-task/display-task.component';


const routes: Routes = [
  {
    path: 'todo',
    component: AddTaskComponent
  },
  {
    path: 'todo/:taskId',
    component: DisplayTaskComponent
  },
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
