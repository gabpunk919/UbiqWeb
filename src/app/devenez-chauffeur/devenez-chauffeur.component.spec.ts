import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevenezChauffeurComponent } from './devenez-chauffeur.component';

describe('DevenezChauffeurComponent', () => {
  let component: DevenezChauffeurComponent;
  let fixture: ComponentFixture<DevenezChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevenezChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevenezChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
