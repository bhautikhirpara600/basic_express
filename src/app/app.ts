import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signup } from './signup/signup';
import { CounterWithSignal } from './counter-with-signal/counter-with-signal';
import { ToDoList } from './to-do-list/to-do-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Signup, CounterWithSignal, ToDoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('01_Basic_Angular');

  name = "Bhautik"
  changeName = "Angular"
  getName() {
    console.log(`My name is ${this.name}.`);
    this.changeName = this.name;
  }
}
