import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  // string型のtitle変数を定義し、デフォルトの値を代入する
  title: string = 'タスク登録';
  //　配列tasksを用意し、オブジェクトにstring型のnameを格納
  //  nameをキーとしたオブジェクトの型が{ name: string } でそれを配列[]で格納
  // 配列[]はArray<>でも表記可能
  tasks: { name: string }[] = [
    { name: 'タスク1' },
    { name: 'タスク2' },
  ];
  //プロパティtaskを定義(テンプレート側で[(ngModel)]にて双方向データバインディングを行うため)
  task: string;
  constructor() {

  }

  ionViewWillEnter() {
    //localStrageにtasksが保存されている場合はtasksを取り出す
    if(localStorage.getItem('tasks')){
      // JSON.parse()を使って、JSON文字列のtasksを配列に戻し、プロパティtasksを上書き
      this.tasks = JSON.parse(localStorage.getItem('tasks'))
    }
  }

  addTask() {
    /* プロパティにメソッド内からアクセスするためにthisを使う
       配列の末尾にpushで要素を追記
    */
    this.tasks.push({
      name: this.task
    });
    /* localStorageでデータの永続化ができるのはstring型だけ。
    * そのため、配列を格納する場合は、下記のようにJSON形式で変換する
    * この場合、第一引数のkeyが保存する名前になる。*/
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    /* pushが終わったら、初期化のために<ion-input>を空にする */
    this.task = '';
  }
}
