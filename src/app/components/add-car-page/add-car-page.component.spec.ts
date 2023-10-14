import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarPageComponent } from './add-car-page.component';

describe('AddCarComponent', () => {
  let component: AddCarPageComponent;
  let fixture: ComponentFixture<AddCarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCarPageComponent]
    });
    fixture = TestBed.createComponent(AddCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
