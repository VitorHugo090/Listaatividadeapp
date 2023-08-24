import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { MatCardModule } from '@angular/material/card';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PagenotFoundComponent,
    DialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
