import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  constructor(private route:ActivatedRoute) {}

  id: number | null = null;
  name: string | null = "";

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id']
      this.name = params['name']
    })
  }
}
