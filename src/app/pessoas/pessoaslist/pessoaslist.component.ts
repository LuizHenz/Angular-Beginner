import { Component } from '@angular/core';
import { Pessoas } from '../pessoas';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {

  lista: Pessoas[] = [];

  constructor(){
    let pessoa1: Pessoas = new Pessoas();
    pessoa1.nome = 'Luiz';
    pessoa1.idade = 35;

    let pessoa2: Pessoas = new Pessoas();
    pessoa2.nome = 'Roberto';
    pessoa2.idade = 15;

    let pessoa3: Pessoas = new Pessoas();
    pessoa3.nome = 'Henz';
    pessoa3.idade = 65;

    let pessoa4: Pessoas = new Pessoas();
    pessoa4.nome = 'Maria';
    pessoa4.idade = 28;

    let pessoa5: Pessoas = new Pessoas();
    pessoa5.nome = 'Joana';
    pessoa5.idade = 16;

    let pessoa6: Pessoas = new Pessoas();
    pessoa6.nome = 'Renata';
    pessoa6.idade = 49;

    let pessoa7: Pessoas = new Pessoas();
    pessoa7.nome = 'Carlos';
    pessoa7.idade = 18;

    let pessoa8: Pessoas = new Pessoas();
    pessoa8.nome = 'Andre';
    pessoa8.idade = 25;

    let pessoa9: Pessoas = new Pessoas();
    pessoa9.nome = 'Kevin';
    pessoa9.idade = 17;

    let pessoa10: Pessoas = new Pessoas();
    pessoa10.nome = 'Leticia';
    pessoa10.idade = 89;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);

  }


}
