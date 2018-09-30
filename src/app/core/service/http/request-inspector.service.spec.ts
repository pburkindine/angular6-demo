import { TestBed } from '@angular/core/testing';
import { RequestInspectorService } from './request-inspector.service';
import { HttpRequest } from '@angular/common/http';

describe('RequestInspectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: RequestInspectorService = TestBed.get(
      RequestInspectorService
    );
    expect(service).toBeTruthy();
  });

  it('isConfigFileRequest should return true if req.url ends with /assets/config.json', () => {
    const service: RequestInspectorService = TestBed.get(
      RequestInspectorService
    );

    // tslint:disable-next-line:no-any
    const mockRequest: HttpRequest<any> = new HttpRequest(
      'GET',
      '/assets/config.json'
    );
    const result: boolean = service.isConfigFileRequest(mockRequest);
    expect(result).toBe(true);
  });

  it('isConfigFileRequest should return false if req.url ends with any other value', () => {
    const service: RequestInspectorService = TestBed.get(
      RequestInspectorService
    );

    // tslint:disable-next-line:no-any
    const mockRequest: HttpRequest<any> = new HttpRequest(
      'GET',
      '/some/other/url'
    );
    const result: boolean = service.isConfigFileRequest(mockRequest);
    expect(result).toBe(false);
  });
});
