import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCarComponent } from './get-car.component';

describe('CarComponent', () => {
  let component: GetCarComponent;
  let fixture: ComponentFixture<GetCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCarComponent]
    });
    fixture = TestBed.createComponent(GetCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
