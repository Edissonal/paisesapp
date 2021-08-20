import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: []
})
export class PorCapitalComponent implements OnInit {

  termino: string = "";
  hayerror: boolean = false;
  paises: Country[] = [];

  constructor(private paisService:PaisService) { }

  ngOnInit() {
  }


  buscar(termino:string) {
    this.hayerror = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino)
      .subscribe((paises) => { 
        this.paises = paises;
        console.log(this.paises);
      },(err)=>{
        
          this.hayerror = true;
          this.paises = [];
      });
   
  }

}
