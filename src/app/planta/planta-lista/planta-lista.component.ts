import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-lista',
  templateUrl: './planta-lista.component.html',
  styleUrls: ['./planta-lista.component.css']
})
export class PlantaListaComponent implements OnInit {

  constructor(private plantaService: PlantaService) { }
  plantas: Array<Planta> = [];
  plantasExt: number = 0;
  plantasInt: number = 0;

  getPlantas() {
    this.plantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
      this.plantasInt = plantas.filter(planta => planta.tipo =="Interior").length
      this.plantasExt = plantas.filter(planta => planta.tipo =="Exterior").length
    });
  }

  ngOnInit() {
    this.getPlantas()
  }

}
