import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P1Child1Component } from './components/p1-child1/p1-child1.component';
import { P1Child2Component } from './components/p1-child2/p1-child2.component';

const routes: Routes = [
  {
   path: 'c1',
   component: P1Child1Component
  },
  {
    path: 'c2',
    component: P1Child2Component
  },
  {
    path: 'p1',
    children: [
      {
        path: 'c1',
        component: P1Child1Component
      },
      {
        path: 'c2',
        component: P1Child2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [P1Child1Component, P1Child2Component]
})
export class Parent1RoutingModule { }
