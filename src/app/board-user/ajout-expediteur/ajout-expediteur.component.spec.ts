import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutExpediteurComponent } from './ajout-expediteur.component';

describe('AjoutExpediteurComponent', () => {
  let component: AjoutExpediteurComponent;
  let fixture: ComponentFixture<AjoutExpediteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutExpediteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutExpediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
