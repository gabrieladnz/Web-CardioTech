import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPainelComponent } from './navbar-painel.component';

describe('NavbarPainelComponent', () => {
  let component: NavbarPainelComponent;
  let fixture: ComponentFixture<NavbarPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPainelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
