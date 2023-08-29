import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  if (data.leftButtonlabel != null) {

    this.leftButtonlabel = data.leftButtonlabel;

  }

  if (data.rightButtonlabel != null) {

    this.rightButtonlabel = data.rightButtonlabel;

  }
  if (data.dialogMsg != null) {

    this.dialogMsg = data.dialogMsg;

  }


  }

  public dialogMsg = 'Continuando com a ação';
  public leftButtonlabel = 'cancelar';
  public rightButtonlabel = '';

  public clickedleftbutton(){
    this.dialogRef.close(false);
  }
  public clickedrightbutton(){

    this.dialogRef.close(true);

  }

}
