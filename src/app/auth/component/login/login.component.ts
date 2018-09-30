import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'ng2-ui-auth';
import { ToastrService } from 'ngx-toastr';

import { LogServiceAbstract } from '../../../core/interface/service/log.service.abstract';
import { LoginFormFactory } from '../../service/factory/form/login.form.factory';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _authService: AuthService,
    private _formFactory: LoginFormFactory,
    private _loginService: LoginService,
    private _logger: LogServiceAbstract,
    private _router: Router,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this._authService.logout();
    this.form = this._formFactory.getForm();
  }

  public login(): void {
    this._loginService
      .login(this.form.value.email, this.form.value.password)
      .subscribe(
        this._successHandler.bind(this),
        this._errorHandler.bind(this)
      );
  }

  protected _successHandler(): void {
    this._toastr.success('Logged in...');
    this._router.navigate(['home']);
  }

  // tslint:disable-next-line:no-any
  protected _errorHandler(result: any): void {
    this._logger.devLog(result);
    this._toastr.error('Login error');
  }

  public goToSignUp(): void {
    this._router.navigate(['auth', 'register']);
  }
}
