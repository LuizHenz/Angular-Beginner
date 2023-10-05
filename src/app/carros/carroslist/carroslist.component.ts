import { Component } from '@angular/core';
import { Carros } from '../carros';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carros[] = [];

  constructor(){
    let carro1: Carros = new Carros();
    carro1.nome = 'Corsa';
    carro1.ano = 2000;

    let carro2: Carros = new Carros();
    carro2.nome = 'Monza';
    carro2.ano = 1998;

    let carro3: Carros = new Carros();
    carro3.nome = 'Senic';
    carro3.ano = 2002;

    let carro4: Carros = new Carros();
    carro4.nome = 'Uno';
    carro4.ano = 1998;

    this.lista.push(carro1);
    this.lista.push(carro2);
    this.lista.push(carro3);
    this.lista.push(carro4);
  }


}
