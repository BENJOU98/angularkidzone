import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyenfComponent } from './myenf.component';

describe('MyenfComponent', () => {
  let component: MyenfComponent;
  let fixture: ComponentFixture<MyenfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyenfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
