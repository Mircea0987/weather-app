import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

import { MatButtonModule } from '@angular/material/button';

const angularMaterials = [
  MatSlideToggleModule,
  MatSidenavModule,
  MatButtonModule,
  MatTableModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, angularMaterials],
  exports: [angularMaterials],
})
export class AngularMaterialModule {}
