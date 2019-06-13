import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
    <button (click)="handleClick()">change to my name</button>
      <input
      (input)="handleInput($event)" 
        type="text" 
        [value]="name"
      (blur)="handleBlur($event)">
      <div>{{name}}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'A course!';
  handleClick(){
    this.name = 'Ultimate Plunge';
  };
  handleInput(event: any){
    this.name = event.target.value;
  }
  handleBlur(event: any){
    console.log(event);
  }
}
