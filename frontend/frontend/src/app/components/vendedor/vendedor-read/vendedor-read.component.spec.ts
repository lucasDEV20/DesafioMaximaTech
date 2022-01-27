import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorReadComponent } from './vendedor-read.component';

describe('VendedorReadComponent', () => {
  let component: VendedorReadComponent;
  let fixture: ComponentFixture<VendedorReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
