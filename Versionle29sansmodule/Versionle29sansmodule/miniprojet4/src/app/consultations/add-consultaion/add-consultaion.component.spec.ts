import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultaionComponent } from './add-consultaion.component';

describe('AddConsultaionComponent', () => {
  let component: AddConsultaionComponent;
  let fixture: ComponentFixture<AddConsultaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsultaionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsultaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
