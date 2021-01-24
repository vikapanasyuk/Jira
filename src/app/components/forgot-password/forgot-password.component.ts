import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  userPass: FormGroup;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  private _createForm(){
    this.userPass = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  resetPass() {
    if (this.userPass.status === 'VALID') {
      this.authService.ForgotPassword(this.userPass.value.email);
    }
  }
}
