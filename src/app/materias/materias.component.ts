import { Component, OnInit } from '@angular/core';
import { Materia } from '../interfaces/Materia';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  materias: Materia[] = [];
  semestre: number = 0;

  constructor(private __materias: MateriasService) {
    this.materias = this.__materias.getMaterias();
  }

  ngOnInit(): void {}

}