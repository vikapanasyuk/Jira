import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  templateText: {[key: string]: string} = {
    title: 'Sign up',
    btnTitle: 'Sign up',
    btnTitleG: 'Continue with Google',
    accountTitle: 'Already have an account?',
    btnTitleRedirect: 'Log in'
  }
  pathLink: string = '/sign-in';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  logIn(data) {
    this.authService.SignUp(data.email, data.password)
  }

  logInWithGoogle() {
    this.authService.GoogleAuth();
  }

}
