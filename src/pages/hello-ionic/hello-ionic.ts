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
  constructor() {

  }
}
