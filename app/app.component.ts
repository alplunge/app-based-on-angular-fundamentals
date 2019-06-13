import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML] = title></h1>
      <div>
      {{random + randomTwo}}
      </div>
      <div>
      {{isHappy ? ':)' : ':('}}
      </div>
      <input type="text" [value]="name">
      <div>{{name}}</div>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = 'A course!';
  age: number = 3;
  random: number = 2;
  randomTwo: boolean = true;
  constructor(){
    this.title = 'Ultimate Plunge';
  }
}
