import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBanner2Component } from './top-banner2.component';

describe('TopBanner2Component', () => {
  let component: TopBanner2Component;
  let fixture: ComponentFixture<TopBanner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBanner2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBanner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
