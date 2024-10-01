import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, RouterModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent implements OnInit {

  listProductos: Producto[] = [];

  constructor(private _productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    }
    )
  }

  eliminarProducto(id: any) {
    this._productoService.eliminarProducto(id).subscribe(data => {
      this.obtenerProductos();
      
    }
    )
  }
}
