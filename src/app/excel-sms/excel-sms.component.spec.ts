import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelSMSComponent } from './excel-sms.component';

describe('ExcelSMSComponent', () => {
  let component: ExcelSMSComponent;
  let fixture: ComponentFixture<ExcelSMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelSMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelSMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
