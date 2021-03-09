import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1Child1Component } from './p1-child1.component';

describe('P1Child1Component', () => {
  let component: P1Child1Component;
  let fixture: ComponentFixture<P1Child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1Child1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P1Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
