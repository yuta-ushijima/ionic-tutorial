//遅延読み込みを行うために、このファイルは@Componentのファイル名にmoduleがついている
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskListPage } from './task-list';

@NgModule({
  declarations: [
    TaskListPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskListPage),
  ],
})
export class TaskListPageModule {}
