import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2Child2Component } from './p2-child2.component';

describe('P2Child2Component', () => {
  let component: P2Child2Component;
  let fixture: ComponentFixture<P2Child2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2Child2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P2Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
