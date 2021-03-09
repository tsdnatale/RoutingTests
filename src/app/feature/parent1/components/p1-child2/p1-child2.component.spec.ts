import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1Child2Component } from './p1-child2.component';

describe('P1Child2Component', () => {
  let component: P1Child2Component;
  let fixture: ComponentFixture<P1Child2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1Child2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P1Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
