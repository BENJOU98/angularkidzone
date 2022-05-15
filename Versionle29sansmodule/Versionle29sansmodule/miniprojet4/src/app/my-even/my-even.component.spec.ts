import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEvenComponent } from './my-even.component';

describe('MyEvenComponent', () => {
  let component: MyEvenComponent;
  let fixture: ComponentFixture<MyEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
