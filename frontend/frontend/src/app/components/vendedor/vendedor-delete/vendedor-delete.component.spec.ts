import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorDeleteComponent } from './vendedor-delete.component';

describe('VendedorDeleteComponent', () => {
  let component: VendedorDeleteComponent;
  let fixture: ComponentFixture<VendedorDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
