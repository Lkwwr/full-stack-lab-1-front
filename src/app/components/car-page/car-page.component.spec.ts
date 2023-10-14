import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPageComponent } from './car-page.component';

describe('CarComponent', () => {
  let component: CarPageComponent;
  let fixture: ComponentFixture<CarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarPageComponent]
    });
    fixture = TestBed.createComponent(CarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
