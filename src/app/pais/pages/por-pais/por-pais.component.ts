import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  
  li{
    cursor:pointer;
  }
  `]
})
export class PorPaisComponent implements OnInit {


  termino: string = "";
  hayerror: boolean = false;
  paises: Country[] = [];
  paisesSubgeridos: Country[] = [];
  mostrarSubgerencias: boolean = false;

  constructor(private paisService:PaisService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.mostrarSubgerencias = false;
    this.hayerror = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
      .subscribe((paises) => { 
        this.paises = paises;
        console.log(this.paises);
      },(err)=>{
        
          this.hayerror = true;
          this.paises = [];
      });
   
  }

  subgerencias(termino: string) {
    this.hayerror = false;
    this.termino = termino;
    this.mostrarSubgerencias = true;
    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSubgeridos = paises.splice(0, 5),
    (err)=>this.paisesSubgeridos=[]);

  }

  buscarSubgerido(termino:string) {
    this.buscar(termino);
    this.mostrarSubgerencias = false;
  }
}
