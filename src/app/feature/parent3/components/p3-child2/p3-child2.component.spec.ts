import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3Child2Component } from './p3-child2.component';

describe('P3Child2Component', () => {
  let component: P3Child2Component;
  let fixture: ComponentFixture<P3Child2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3Child2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P3Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
