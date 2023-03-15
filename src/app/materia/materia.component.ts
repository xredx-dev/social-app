import { Component, Input, OnInit } from '@angular/core';
import { Materia } from '../interfaces/Materia';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit{
  
  
  constructor(){
  }
  @Input() materia = {} as Materia;
  

  ngOnInit(){}
}
