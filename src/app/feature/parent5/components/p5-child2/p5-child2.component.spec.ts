import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5Child2Component } from './p5-child2.component';

describe('P5Child2Component', () => {
  let component: P5Child2Component;
  let fixture: ComponentFixture<P5Child2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5Child2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P5Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
