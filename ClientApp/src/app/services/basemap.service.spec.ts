import { TestBed } from '@angular/core/testing';

import { BasemapService } from './basemap.service';

describe('Basemap.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasemapService = TestBed.get(BasemapService);
    expect(service).toBeTruthy();
  });
});
