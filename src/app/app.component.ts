import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getName(name)
  {
    alert('Attention '+name+' !')
  };
  title = 'Important event in Angular';
  getData(val:string)
  {
    console.warn(val);
  }
  displayVal='';
  getValue(val:string)
  {
    console.warn(val);
    this.displayVal=val;
  }
}
