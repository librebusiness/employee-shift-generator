import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword = false;
  email: FormControl = new FormControl('', Validators.email);
  password: FormControl = new FormControl('', Validators.required);

  constructor(
    private auth: Auth,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const email = this.email.value;
    const password = this.password.value;

    signInWithEmailAndPassword(this.auth, email, password).then(user => {
      if (user) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
