import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatnavbarComponent } from './statnavbar.component';

describe('StatnavbarComponent', () => {
  let component: StatnavbarComponent;
  let fixture: ComponentFixture<StatnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
