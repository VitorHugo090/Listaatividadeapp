import { Category, } from './../_models/category';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modaledit',
  templateUrl: './modaledit.component.html',
  styleUrls: ['./modaledit.component.css']
})
export class ModaleditComponent implements OnInit {

  public editableCategory: Category | undefined;
  
  constructor(
    private dialogRef: MatDialogRef<ModaleditComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any) {    
    
  

   if(dialogData.editableCategory != null) {

    this.editableCategory = dialogData.editableCategory;
    
   } 
    }
  ngOnInit(): void {
    
  }
}

