import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';






@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductosComponent,  // Aquí se declaran los componentes
  ],
  imports: [
   
    AppRoutingModule,
    BrowserModule,
    //CommonModule,
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]  // Componente raíz de la aplicación
})
export class AppModule { }

