import { TestBed, inject } from '@angular/core/testing';

import { Pedidos.ServiceService } from './pedidos.service.service';

describe('Pedidos.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Pedidos.ServiceService]
    });
  });

  it('should be created', inject([Pedidos.ServiceService], (service: Pedidos.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
