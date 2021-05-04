import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewCounterService {

  counter = 0;

  constructor() { }

  setCounter(val: number) {
    this.counter = val;
  }

  deleteCounter() {
    if(this.counter == 0)
    {
      alert("already zero");
      return;
    }
    --this.counter;
  }
}
