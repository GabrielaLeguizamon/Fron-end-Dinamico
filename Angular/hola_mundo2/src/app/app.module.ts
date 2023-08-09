import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    EncabezadoComponent,
    IntroduccionComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
