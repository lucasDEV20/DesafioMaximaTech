import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorCreateComponent } from './vendedor-create.component';

describe('VendedorCreateComponent', () => {
  let component: VendedorCreateComponent;
  let fixture: ComponentFixture<VendedorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
