import { TestBed } from '@angular/core/testing';

import { EnvoyerSMSService } from './envoyer-sms.service';

describe('EnvoyerSMSService', () => {
  let service: EnvoyerSMSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvoyerSMSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
