import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorCrudComponent } from './vendedor-crud.component';

describe('VendedorCrudComponent', () => {
  let component: VendedorCrudComponent;
  let fixture: ComponentFixture<VendedorCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
