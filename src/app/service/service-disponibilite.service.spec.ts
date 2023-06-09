import { TestBed } from '@angular/core/testing';

import { ServiceDisponibiliteService } from './service-disponibilite.service';

describe('ServiceDisponibiliteService', () => {
  let service: ServiceDisponibiliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDisponibiliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
