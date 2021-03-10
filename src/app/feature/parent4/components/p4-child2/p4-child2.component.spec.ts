import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4Child2Component } from './p4-child2.component';

describe('P4Child2Component', () => {
  let component: P4Child2Component;
  let fixture: ComponentFixture<P4Child2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P4Child2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P4Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
