import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Injectable({
  providedIn: 'root',
})
export class LoginFormFactory {
  constructor(private _formBuilder: FormBuilder) {}

  public getForm(): FormGroup {
    return this._formBuilder.group({
      email: this._formBuilder.control(null, [
        CustomValidators.email,
        Validators.required,
      ]),
      password: this._formBuilder.control(null, [
        Validators.required,
        Validators.maxLength(255),
      ]),
    });
  }
}
