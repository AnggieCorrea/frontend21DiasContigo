import { TestBed } from '@angular/core/testing';

import { ContTileMapService } from './cont-tile-map.service';

describe('ContTileMapService', () => {
  let service: ContTileMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContTileMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
