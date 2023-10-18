import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-modalnewcategory',
  templateUrl: './modalnewcategory.component.html',
  styleUrls: ['./modalnewcategory.component.css']
})
export class ModalnewcategoryComponent {

  constructor(
    public dialogref: MatDialogRef<ModalnewcategoryComponent>,
  ) {}


  public criarmodal(){

  }
  public fecharmodal(){}

}
