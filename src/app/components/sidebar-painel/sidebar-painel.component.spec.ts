import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPainelComponent } from './sidebar-painel.component';

describe('SidebarPainelComponent', () => {
  let component: SidebarPainelComponent;
  let fixture: ComponentFixture<SidebarPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPainelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
