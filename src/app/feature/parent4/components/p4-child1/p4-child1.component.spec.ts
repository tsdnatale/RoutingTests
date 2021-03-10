import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4Child1Component } from './p4-child1.component';

describe('P4Child1Component', () => {
  let component: P4Child1Component;
  let fixture: ComponentFixture<P4Child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P4Child1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P4Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
