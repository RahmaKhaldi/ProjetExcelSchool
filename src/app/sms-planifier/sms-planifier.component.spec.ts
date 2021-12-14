import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsPlanifierComponent } from './sms-planifier.component';

describe('SmsPlanifierComponent', () => {
  let component: SmsPlanifierComponent;
  let fixture: ComponentFixture<SmsPlanifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsPlanifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsPlanifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
