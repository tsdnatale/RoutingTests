import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3Child1Component } from './p3-child1.component';

describe('P3Child1Component', () => {
  let component: P3Child1Component;
  let fixture: ComponentFixture<P3Child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3Child1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P3Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
