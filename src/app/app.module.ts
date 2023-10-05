import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexComponent } from './layout/index/index.component';
import { PessoaslistComponent } from './pessoas/pessoaslist/pessoaslist.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoasdetailComponent } from './pessoas/pessoasdetail/pessoasdetail.component';
import { CarrosdetailComponent } from './carros/carrosdetail/carrosdetail.component';
import { LivrosdetailComponent } from './livros/livrosdetail/livrosdetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PessoaslistComponent,
    IndexComponent,
    CarroslistComponent,
    LivroslistComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    PessoasdetailComponent,
    CarrosdetailComponent,
    LivrosdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
