import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P2Child1Component } from './components/p2-child1/p2-child1.component';
import { P2Child2Component } from './components/p2-child2/p2-child2.component';

const routes: Routes = [
  {
    path: 'p2',
    children: [
      {
        path: 'c1',
        component: P2Child1Component
      },
      {
        path: 'c2',
        component: P2Child2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [P2Child1Component, P2Child2Component]
})
export class Parent2RoutingModule { }
