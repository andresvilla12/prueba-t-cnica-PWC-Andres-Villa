import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../../models/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'crear-producto',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,
  ],
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute
  ) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoría: ['', Validators.required],
      ubicación: ['', Validators.required],
      precio: ['', Validators.required],
    })

    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoría')?.value,
      ubicacion: this.productoForm.get('ubicación')?.value,
      precio: this.productoForm.get('precio')?.value,
    }
    
    if(this.id !== null) {
      //editamos producto
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data => {

        this.router.navigate(['/']); 

      }


      )


    } else {
      //agregamos producto
      console.log(PRODUCTO);

    this._productoService.guardarProducto(PRODUCTO).subscribe( data => {
        console.log('Producto guardado:');
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error al guardar el producto:', error);
      })
    }
    
  }

  esEditar() {
    if (this.id != null) {
      this.titulo = 'Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoría: data.categoria,
          ubicación: data.ubicacion,
          precio: data.precio,
        });
      });
    }
  }
}


