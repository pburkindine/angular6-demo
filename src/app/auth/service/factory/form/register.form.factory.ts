import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Injectable({
  providedIn: 'root',
})
export class RegisterFormFactory {
  constructor(private _formBuilder: FormBuilder) {}

  public getForm(): FormGroup {
    const newPasswordControl: FormControl = this._formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(255),
    ]);

    const confirmPasswordControl: FormControl = this._formBuilder.control(
      null,
      [Validators.required, CustomValidators.equalTo(newPasswordControl)]
    );

    return this._formBuilder.group({
      email: this._formBuilder.control(null, [
        CustomValidators.email,
        Validators.required,
      ]),
      name: this._formBuilder.control(null, [
        Validators.required,
        Validators.maxLength(255),
      ]),
      password: newPasswordControl,
      confirmPassword: confirmPasswordControl,
    });
  }
}
