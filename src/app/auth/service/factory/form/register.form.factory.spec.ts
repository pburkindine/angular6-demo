import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { RegisterFormFactory } from './register.form.factory';

describe('RegisterFormFactory', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [FormBuilder],
    }));

  it('should be created', () => {
    const service: RegisterFormFactory = TestBed.get(RegisterFormFactory);
    expect(service).toBeTruthy();
  });

  it('should be tested', () => {
    pending('TODO no time for this tonight');
  });
});
