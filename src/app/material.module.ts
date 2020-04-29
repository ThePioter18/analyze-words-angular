import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';


const myModule = [
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatTableModule,
  MatButtonModule,
  MatListModule,
]

@NgModule({
  imports: [
    CommonModule,
    myModule
  ],
  exports: [myModule],
  declarations: []
})
export class MaterialModule { }