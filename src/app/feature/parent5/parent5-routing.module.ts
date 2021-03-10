import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P5Child1Component } from './components/p5-child1/p5-child1.component';
import { P5Child2Component } from './components/p5-child2/p5-child2.component';

const routes: Routes = [
  {
    path: 'c1',
    component: P5Child1Component
  },
  {
    path: 'c2',
    component: P5Child2Component
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'c1'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [P5Child1Component, P5Child2Component]
})
export class Parent5RoutingModule { }
