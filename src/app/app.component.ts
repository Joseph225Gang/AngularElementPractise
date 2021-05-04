import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-counter [counter]="10" (counterChange)="onCounterChange($event)"></app-counter><br><new-counter [counter]="10" (numChange)="onCounterChange($event)"></new-counter>',
  styles: []
})
export class AppComponent {

  onCounterChange(val : number) {
    console.log(val);
  }
}
