import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCenterPageComponent } from './add-center-page.component';

describe('AddCenterPageComponent', () => {
  let component: AddCenterPageComponent;
  let fixture: ComponentFixture<AddCenterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCenterPageComponent]
    });
    fixture = TestBed.createComponent(AddCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
