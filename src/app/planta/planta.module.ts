import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaComponent } from './planta.component';
import { PlantaListaComponent } from './planta-lista/planta-lista.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlantaComponent,
    PlantaListaComponent
  ],
  exports: [
    PlantaListaComponent
  ]
})
export class PlantaModule { }
