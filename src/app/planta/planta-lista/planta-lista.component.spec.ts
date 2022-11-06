/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlantaListaComponent } from './planta-lista.component';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';
import { faker } from '@faker-js/faker';


describe('PlantaListaComponent', () => {
  let component: PlantaListaComponent;
  let fixture: ComponentFixture<PlantaListaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaListaComponent ],
      imports: [HttpClientTestingModule],
      providers: [PlantaService],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListaComponent);
    component = fixture.componentInstance;
    for(let i = 0; i < 3; i++){
      const planta = new Planta(
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
      )
      component.plantas.push(planta)
      }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de tener 4 <tr> 1 encabezado y 3 columnas', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4);
  });

});
