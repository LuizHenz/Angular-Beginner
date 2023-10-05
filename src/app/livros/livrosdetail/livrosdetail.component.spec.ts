import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosdetailComponent } from './livrosdetail.component';

describe('LivrosdetailComponent', () => {
  let component: LivrosdetailComponent;
  let fixture: ComponentFixture<LivrosdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrosdetailComponent]
    });
    fixture = TestBed.createComponent(LivrosdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
