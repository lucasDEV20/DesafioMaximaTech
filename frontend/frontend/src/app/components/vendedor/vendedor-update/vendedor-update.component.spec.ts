import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorUpdateComponent } from './vendedor-update.component';

describe('VendedorUpdateComponent', () => {
  let component: VendedorUpdateComponent;
  let fixture: ComponentFixture<VendedorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
