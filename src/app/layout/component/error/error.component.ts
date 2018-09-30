import { Component, OnInit } from '@angular/core';
import { LogServiceAbstract } from '../../../core/interface/service/log.service.abstract';

@Component({
  selector: 'app-error-page',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  constructor(private _logger: LogServiceAbstract) {}

  ngOnInit(): void {
    throw new Error('TEST1');
  }
}
