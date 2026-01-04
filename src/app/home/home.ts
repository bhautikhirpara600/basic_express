import { Component } from '@angular/core';
import { MyDirectives } from '../my-directives/my-directives';

@Component({
  selector: 'app-home',
  imports: [MyDirectives],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
