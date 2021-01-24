import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  templateText: {[key: string]: string} = {
    title: 'Sign in',
    btnTitle: 'Log in',
    btnTitleG: 'Log in with Google',
    accountTitle: 'Don\'t have an account?',
    btnTitleRedirect: 'Sing up',
  }
  isSignIn: boolean = true;
  pathLink: string = '/sign-up';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  logIn(data) {
    this.authService.SignIn(data.email, data.password)
  }

  logInWithGoogle() {
    this.authService.GoogleAuth();
  }
}
