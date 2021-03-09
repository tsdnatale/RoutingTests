import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3ParentComponent } from './p3-parent.component';

describe('P3ParentComponent', () => {
  let component: P3ParentComponent;
  let fixture: ComponentFixture<P3ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P3ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
