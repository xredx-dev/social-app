import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  mostrarMensaje = true;

  constructor(){}

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
