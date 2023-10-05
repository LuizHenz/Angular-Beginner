import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoaslistComponent } from './pessoas/pessoaslist/pessoaslist.component';
import { PessoasdetailComponent } from './pessoas/pessoasdetail/pessoasdetail.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { CarrosdetailComponent } from './carros/carrosdetail/carrosdetail.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { LivrosdetailComponent } from './livros/livrosdetail/livrosdetail.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full'},
  { path: "login", component: LoginComponent},
  { path: "admin", component: IndexComponent, children:[

    {path: "pessoas", component: PessoaslistComponent},
    {path: "pessoas/novo", component: PessoasdetailComponent},
    {path: "pessoas/cadastro/:id", component: PessoasdetailComponent},

    {path: "carros", component: CarroslistComponent},
    {path: "carros/novo", component: CarrosdetailComponent},
    {path: "carros/cadastro/:id", component: CarrosdetailComponent},

    {path: "livros", component: LivroslistComponent},
    {path: "livros/novo", component: LivrosdetailComponent},
    {path: "livros/cadastro/:id", component: LivrosdetailComponent},

  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
