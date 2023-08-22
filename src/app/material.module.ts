import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, 
    MatSidenavModule,
    MatListModule

  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDivider
  ]
})
export class MaterialModule { }
