import { Component, OnInit } from '@angular/core';
import { Materia } from '../interfaces/Materia';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit{

  semestreSeleccionado:number =1;
  materias:Materia[]=[];

  constructor(
    private __materiasService: MateriasService
  ){
    this.materias = this.__materiasService.getMaterias();
  }

  ngOnInit(): void {
  }
}