import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsConsultaionComponent } from './details-consultaion.component';

describe('DetailsConsultaionComponent', () => {
  let component: DetailsConsultaionComponent;
  let fixture: ComponentFixture<DetailsConsultaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsConsultaionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsConsultaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
