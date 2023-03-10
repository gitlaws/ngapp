import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RadioSelectionComponent } from './radio-selection.component';

describe('RadioSelectionComponent', () => {
  let component: RadioSelectionComponent;
  let fixture: ComponentFixture<RadioSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
