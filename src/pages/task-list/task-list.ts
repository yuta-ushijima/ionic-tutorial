import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';

/**
 * Generated class for the TaskListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// 遅延読み込みを行う手続き1つ目
@IonicPage()
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html',
})
export class TaskListPage {
  tasks: { name: string }[] = [
    {name: 'タスク1'},
    {name: 'タスク2'},
  ];

  //クラス内で使用できるように、ActionSheetControllerをactionSheetCtrlの引数に注入
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
    if(localStorage.getItem('tasks')){
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskListPage');
  }

  changeTask(index: number) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'タスクの変更',
      buttons: [
        {
          text: '削除',
          role: 'destructive',
          //handler内の処理は、削除をクリックした時の挙動
          handler: () => {
            //tasksのindex番目を削除する処理を書く
            this.tasks.splice(index, 1);
            // localStorageの値を上書き保存
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
          }
        },{
          text: '変更',
          handler: () => {
            this._renameTask(index);
          }
        },{
          text: '閉じる',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked')
          }
        }
      ]
    });
    actionSheet.present();
  }

  _renameTask(index: number){
    let prompt = this.alertCtrl.create({
      title: '変更後のタスク',
      inputs: [
        {
          name: 'task',
          placeholder: 'タスク',
          value: this.tasks[index].name
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
          //  タスクのindex番目を上書き
            this.tasks[index] = { name: data.task };
          //  localStorageに保存
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
          }
        }
      ]
    });
    prompt.present();
  }
}
