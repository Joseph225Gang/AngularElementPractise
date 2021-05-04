import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NewCounterService } from '../newCounterService';

@Component({
  selector: 'new-counter',
  template: '{{ newCounterService.counter }}<button (click)="delete()">-</button>',
  styles: []
})
export class NewCounterComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() numChange = new EventEmitter<number>();

  constructor(public newCounterService: NewCounterService) { }

  ngOnInit() {
    this.newCounterService.setCounter(this.counter);
  }

  delete() {
    this.newCounterService.deleteCounter();
    this.numChange.emit(this.newCounterService.counter);
  }
}
