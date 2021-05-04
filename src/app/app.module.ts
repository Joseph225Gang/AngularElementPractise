import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { NewCounterComponent } from './newCounter/newCounter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NewCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [CounterComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const counterElement = createCustomElement(CounterComponent, { injector: this.injector });
    customElements.define('my-counter', counterElement);

    const newCounterElement = createCustomElement(NewCounterComponent, { injector: this.injector });
    customElements.define('new-counter', newCounterElement);
  }
}
