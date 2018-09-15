import { TestBed, inject } from '@angular/core/testing';

import { Ventas.ServiceService } from './ventas.service.service';

describe('Ventas.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ventas.ServiceService]
    });
  });

  it('should be created', inject([Ventas.ServiceService], (service: Ventas.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
