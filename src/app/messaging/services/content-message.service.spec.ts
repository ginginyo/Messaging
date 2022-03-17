import { TestBed } from '@angular/core/testing';

import { ContentMessageService } from './content-message.service';

describe('ContentMessageService', () => {
  let service: ContentMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
