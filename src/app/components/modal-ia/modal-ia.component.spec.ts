import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIAComponent } from './modal-ia.component';

describe('ModalIAComponent', () => {
  let component: ModalIAComponent;
  let fixture: ComponentFixture<ModalIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
