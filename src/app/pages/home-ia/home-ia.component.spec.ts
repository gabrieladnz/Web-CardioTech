import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIAComponent } from './home-ia.component';

describe('HomeIAComponent', () => {
  let component: HomeIAComponent;
  let fixture: ComponentFixture<HomeIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
