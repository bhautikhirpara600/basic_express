import { Component } from '@angular/core';

@Component({
  selector: 'app-my-directives',
  imports: [],
  templateUrl: './my-directives.html',
  styleUrl: './my-directives.css',
})
export class MyDirectives {
  show = true;
  toggle() {
    this.show = !this.show;
  }
}
