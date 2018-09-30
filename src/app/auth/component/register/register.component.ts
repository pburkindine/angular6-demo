import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LogServiceAbstract } from '../../../core/interface/service/log.service.abstract';
import { User } from '../../../core/model/user.model';
import { UserFactory } from '../../../core/service/factory/user.factory';
import { RegisterFormFactory } from '../../service/factory/form/register.form.factory';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private _formFactory: RegisterFormFactory,
    private _logger: LogServiceAbstract,
    private _registerService: RegisterService,
    private _router: Router,
    private _toastr: ToastrService,
    private _userFactory: UserFactory
  ) {}

  ngOnInit(): void {
    this.form = this._formFactory.getForm();
  }

  public register(): void {
    const user: User = this._userFactory.getFromFormData(this.form.value);

    this._registerService
      .register(user)
      .subscribe(
        this._successHandler.bind(this),
        this._errorHandler.bind(this)
      );
  }

  protected _successHandler(): void {
    this._toastr.success('Registeration successful!');
    this._router.navigate(['auth', 'login']);
  }

  protected _errorHandler(errorResponse: HttpErrorResponse): void {
    this._logger.devLog(errorResponse.error);

    this._toastr.error(
      `Registration error:<br/>${this._getErrorList(errorResponse)}`
    );
  }

  protected _getErrorList(errorResponse: HttpErrorResponse): string {
    let errorList: string = '<ul>';
    Object.values(errorResponse.error).forEach((error: string) => {
      errorList = `${errorList}<li>${error}</li>`;
    });

    return `${errorList}</ul>`;
  }

  public goToLogin(): void {
    this._router.navigate(['auth', 'login']);
  }
}
