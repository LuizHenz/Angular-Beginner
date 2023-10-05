import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosdetailComponent } from './carrosdetail.component';

describe('CarrosdetailComponent', () => {
  let component: CarrosdetailComponent;
  let fixture: ComponentFixture<CarrosdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosdetailComponent]
    });
    fixture = TestBed.createComponent(CarrosdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
