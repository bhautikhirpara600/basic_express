import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-with-signal',
  imports: [],
  templateUrl: './counter-with-signal.html',
  styleUrl: './counter-with-signal.css',
})
export class CounterWithSignal {
  counter = signal(0)

  increment() {
    this.counter.set(this.counter() + 1)
  }

  decrement() {
    if(this.counter() === 0) return
    this.counter.update(prev => prev-1)
  }
}
