import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecComponent } from './my-rec.component';

describe('MyRecComponent', () => {
  let component: MyRecComponent;
  let fixture: ComponentFixture<MyRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
