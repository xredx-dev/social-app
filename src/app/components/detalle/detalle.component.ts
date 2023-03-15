import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  pais:any
  constructor(
    private activatedRoute : ActivatedRoute,
    private _paisesService: PaisesService
  ){
    this.activatedRoute.params.subscribe(params =>{
      const id = params['id'];
      this._paisesService.getPais(id).subscribe(response =>this.pais =response)
    });
  }

}
