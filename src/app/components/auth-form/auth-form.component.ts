import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Input() templateText;
  @Input() pathLink;
  @Input() isSignIn;
  @Output() logInHandler = new EventEmitter();
  @Output() logInWithGoogleHandler = new EventEmitter();

  userAuth: FormGroup;
  constructor(private fb: FormBuilder) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  private _createForm(){
    this.userAuth = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  logIn() {
    if (this.userAuth.status === 'VALID') {
      this.logInHandler.emit(this.userAuth.value);
    }
  }

  logInWithGoogle() {
    this.logInWithGoogleHandler.emit();
  }

}
