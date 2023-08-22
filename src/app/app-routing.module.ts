import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  { path: '', component:  HomeComponent},
  {path: 'categoria', component: CategoryComponent},
  { path: '**', component: PagenotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
