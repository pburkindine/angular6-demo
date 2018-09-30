import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginFormFactory } from './login.form.factory';

describe('LoginFormFactory', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [FormBuilder],
    }));

  it('should be created', () => {
    const service: LoginFormFactory = TestBed.get(LoginFormFactory);
    expect(service).toBeTruthy();
  });

  it('should return form group with required keys', () => {
    const service: LoginFormFactory = TestBed.get(LoginFormFactory);
    const formGroup: FormGroup = service.getForm();

    expect(formGroup.get('email')).toBeTruthy();
    expect(formGroup.get('password')).toBeTruthy();
  });
});
