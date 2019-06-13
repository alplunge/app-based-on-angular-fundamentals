import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
    <button (click)="handleClick()">change to my name</button>
      <input
        type="text" 
        [ngModel]="name"
        (ngModelChange)="handleChange($event)">
        <input
        type="text" 
        [(ngModel)]="name"
        >
      <div>{{name}}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'A course!';
  handleClick(){
    this.name = 'Ultimate Plunge';
  };
  handleChange(value: string){
    this.name = value;
  };
}
