import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesCrudComponent } from './clientes-crud.component';

describe('ClientesCrudComponent', () => {
  let component: ClientesCrudComponent;
  let fixture: ComponentFixture<ClientesCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
