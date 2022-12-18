import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const angularMaterials = [
  MatSlideToggleModule,
  MatSidenavModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, angularMaterials],
  exports: [angularMaterials],
})
export class AngularMaterialModule {}
