import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P4Child1Component } from './components/p4-child1/p4-child1.component';
import { P4Child2Component } from './components/p4-child2/p4-child2.component';
import { Parent5Module } from '../parent5/parent5.module';

const routes: Routes = [
  {
    path: 'parent4',
    children: [
      {
        path: 'c1',
        component: P4Child1Component
      },
      {
        path: 'c2',
        component: P4Child2Component
      },
      // {
      //   path: 'parent5',
      //   loadChildren: () => import('../parent5/parent5-routing.module').then(m => m.Parent5RoutingModule)
      // }
    ]
  },
  {
    path: 'parent5',
    loadChildren: () => import('../parent5/parent5-routing.module').then(m => m.Parent5RoutingModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    Parent5Module
  ],
  exports: [RouterModule],
  declarations: [
    P4Child1Component,
    P4Child2Component
  ]
})
export class Parent4RoutingModule { }
