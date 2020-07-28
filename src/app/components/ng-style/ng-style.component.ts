import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano"> 
    
    Hola Mundo.... esta es una etiqueta 
    
    </p>

    <button style="btn btn-primary" (click)="tamano = tamano+5">
      <i class="fa fa-plus"></i>
    </button>

    <button style="btn btn-primary" (click)="disminuir()">
      <i class="fa fa-minus"></i>
    </button>



  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano : number = 20;

  constructor() { }

  ngOnInit() {
  }

  disminuir(){

    if (this.tamano>20) {
      this.tamano = this.tamano-5;
    } 
  }

}
