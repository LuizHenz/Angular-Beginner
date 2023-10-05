import { Component } from '@angular/core';
import { Livros } from '../livros';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livros[] = [];

  constructor(){
    let livro1: Livros = new Livros();
    livro1.titulo = 'Biblia';
    livro1.autor = 'Deus';

    let livro2: Livros = new Livros();
    livro2.titulo = 'Biblia';
    livro2.autor = 'Deus';

    let livro3: Livros = new Livros();
    livro3.titulo = 'Biblia';
    livro3.autor = 'Deus';

    this.lista.push(livro1);
    this.lista.push(livro2);
    this.lista.push(livro3
    );

  }

}
