import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasdetailComponent } from './pessoasdetail.component';

describe('PessoasdetailComponent', () => {
  let component: PessoasdetailComponent;
  let fixture: ComponentFixture<PessoasdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasdetailComponent]
    });
    fixture = TestBed.createComponent(PessoasdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
