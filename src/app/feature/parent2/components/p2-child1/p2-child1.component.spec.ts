import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2Child1Component } from './p2-child1.component';

describe('P2Child1Component', () => {
  let component: P2Child1Component;
  let fixture: ComponentFixture<P2Child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2Child1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P2Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
