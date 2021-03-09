import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent1Module } from './feature/parent1/parent1.module';
import { Parent2Module } from './feature/parent2/parent2.module';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes), Parent1Module, Parent2Module],
  exports: [RouterModule]
})
export class AppRoutingModule { }
