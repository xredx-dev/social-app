import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
})
export class DirectivasComponent {
  
  
  mostrarMensaje = true;
  materias:string[]=[
    'matematicas para ingenieria',
    'administracion de base de datos',
    'desarrollo web profecuional',
    'planeacion y organizacion del trabajo',
    'ingles VII',
    'Seguridad enel desarrollo de aplicaiones',
  ]

  contador:number = 0;

}
