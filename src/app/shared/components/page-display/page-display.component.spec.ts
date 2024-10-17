import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisplayComponent } from './page-display.component';

describe('PageDisplayComponent', () => {
  let component: PageDisplayComponent;
  let fixture: ComponentFixture<PageDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDisplayComponent]
    });
    fixture = TestBed.createComponent(PageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
