import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(private route: ActivatedRoute) {}

  name = ""

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  // ngOnInit() {
  //   this.name = this.route.snapshot.queryParams['name'];
  // }
}
