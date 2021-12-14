import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyerSMSComponent } from './envoyer-sms.component';

describe('EnvoyerSMSComponent', () => {
  let component: EnvoyerSMSComponent;
  let fixture: ComponentFixture<EnvoyerSMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoyerSMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoyerSMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
