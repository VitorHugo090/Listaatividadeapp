import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Category } from '../_models/category';

export const CATEGORY_DATA = [
  {name: 'Educação', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Saude', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Trabalho', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Outros', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Bem estar', guid: 'aaa-bbb-ccc-ddd'}
]

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent {
  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

  public editarCategory(category: Category){

    alert("Olá botao editar testado");

  }

 public apagarCategory(category: Category){
  alert("Olá botao apagar testado");
 }

 public createNewCategory(){
  alert("Olá botao criar testado");

 }
}
