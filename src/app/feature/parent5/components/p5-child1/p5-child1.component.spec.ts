import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5Child1Component } from './p5-child1.component';

describe('P5Child1Component', () => {
  let component: P5Child1Component;
  let fixture: ComponentFixture<P5Child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5Child1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P5Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
