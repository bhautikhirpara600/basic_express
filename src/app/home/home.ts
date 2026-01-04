import { Component } from '@angular/core';
import { MyDirectives } from '../my-directives/my-directives';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MyDirectives, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile'], {
      queryParams: { name: 'Bhautik' }
    });
  }

  userList = [
    { id: 1, name: "Vijay", age: 28, email: "vijay@test.com" },
    { id: 2, name: "Bhautik", age: 25, email: "bhautik@test.com" },
    { id: 3, name: "Amit", age: 30, email: "amit@test.com" },
    { id: 4, name: "Priya", age: 27, email: "priya@test.com" },
    { id: 5, name: "Neha", age: 29, email: "neha@test.com" }
  ]

}
