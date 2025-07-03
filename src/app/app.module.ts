import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';


// COMPONENTES

import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductosComponent,  // Aquí se declaran los componentes
  ],
  imports: [
   
    AppRoutingModule,
    BrowserModule, 
  ],

  providers: [],
  bootstrap: [AppComponent]  // Componente raíz de la aplicación
})
export class AppModule { }

