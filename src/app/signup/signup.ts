import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})

export class Signup {
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(120)]),
    city: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor() {
    // Password match validator
    this.signupForm.setValidators(() => {
      return this.password?.value === this.confirmPassword?.value
        ? null
        : { passwordMismatch: true };
    });
  }
  
  // Individual Getters
  get name() { return this.signupForm.get('name'); }
  get age() { return this.signupForm.get('age'); }
  get city() { return this.signupForm.get('city'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }
  
  onSubmit() {
  if (this.signupForm.invalid) {
    this.signupForm.markAllAsTouched();
    return;
  }
  console.log("Form Values:", this.signupForm.value);
  this.signupForm.reset();
}

}
