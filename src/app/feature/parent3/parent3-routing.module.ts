import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P3Child1Component } from './components/p3-child1/p3-child1.component';
import { P3Child2Component } from './components/p3-child2/p3-child2.component';
import { P3ParentComponent } from './components/p3-parent/p3-parent.component';

const routes: Routes = [
  {
    path: 'parent3',
    component: P3ParentComponent,
    children: [
      {
        path: 'c1',
        component: P3Child1Component
      },
      {
        path: 'c2',
        component: P3Child2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [P3Child1Component, P3Child2Component, P3ParentComponent]
})
export class Parent3RoutingModule { }
