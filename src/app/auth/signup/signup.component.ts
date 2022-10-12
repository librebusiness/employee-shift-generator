import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email: FormControl = new FormControl('', Validators.email);
  password: FormControl = new FormControl('', Validators.required);
  showPassword = false;

  constructor(
    private auth: Auth,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const email = this.email.value;
    const password = this.password.value;

    createUserWithEmailAndPassword(this.auth, email, password).then(user => {
      if (user) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
