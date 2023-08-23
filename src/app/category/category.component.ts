import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Category } from '../_models/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent {
  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource!: Category[];

  public editarCategory(category: Category){

  }

 public apagarCategory(category: Category){
  
 }
}
