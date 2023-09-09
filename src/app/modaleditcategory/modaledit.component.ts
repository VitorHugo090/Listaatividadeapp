import { DialogComponent } from '../dialog/dialog.component';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-modaledit',
  templateUrl: './modaledit.component.html',
  styleUrls: ['./modaledit.component.css']
})
export class ModaleditComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogdata: any) {}
  public fecharmodal(){
    this.dialogRef.close(true);
  }
  public alterarmodal(){
    alert("Botão de alterar funcionando com sucesso");
    
  }

}
