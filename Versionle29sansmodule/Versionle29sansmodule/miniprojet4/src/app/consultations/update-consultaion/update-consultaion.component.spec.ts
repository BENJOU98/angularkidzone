import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConsultaionComponent } from './update-consultaion.component';

describe('UpdateConsultaionComponent', () => {
  let component: UpdateConsultaionComponent;
  let fixture: ComponentFixture<UpdateConsultaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateConsultaionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConsultaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
