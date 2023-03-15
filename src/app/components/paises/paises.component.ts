import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {

  paises:any
  constructor(private pasisesService:PaisesService
  ){
    this.pasisesService.getPaises().subscribe((data:any)=>this.paises =data)
  }

}
